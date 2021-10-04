import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/message';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import {ToastrService} from "ngx-toastr";
import {Admin} from "../../model/admin";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user: User = {} as User;
  messageList: Message[] = [];
  messageToast: string = '';
  userList: User[] = [];
  chatUser: User[] = [];
  showingList: User[] = [];
  message: Message = {} as Message;
  chat: User = {} as User;
  sendError = false


  constructor(private route: Router, private userService: UserService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') === null){
      this.route.navigateByUrl('/login');
    }
    else {
      sessionStorage.setItem('selected', '5');
      this.user = JSON.parse(sessionStorage.getItem('admin') || '');

      this.userService.findMessageByUser(this.user).subscribe(
        response => {
          this.messageList = response;
          console.log(response);
          this.messageList.forEach(message => {


            if (message.sendingUser.id !== this.user.id && !this.chatUser.some(elem => elem.id === message.sendingUser.id)){
              this.chatUser.push(message.sendingUser);
            }

            if (message.receivingUser.id !== this.user.id && !this.chatUser.some(elem => elem.id === message.receivingUser.id)){
              this.chatUser.push(message.receivingUser);
            }
          });

          this.showingList = this.chatUser;
        },
        error => {
          this.messageToast = 'Si è verificato un errore\n' + error.error.message;
          this.toastr.error(this.messageToast);
        }
      );

      this.userService.getAllUsers().subscribe(
        response => {
          this.userList = response;
        },
        error => {
          this.messageToast = 'Si è verificato un errore\n' + error.error.message;
          this.toastr.error(this.messageToast);
        }
      );
    }
  }

  openChat(user: User): void{
    this.chat = user;
    this.showingList = this.chatUser;
  }

  sendMessage(): void{
    this.message.date = new Date();
    this.message.sendingUser = this.user;
    this.message.receivingUser = this.chat;

    this.userService.sendMessage(this.message).subscribe(
      response => {
        this.messageList.push(this.message);
        this.sendError = false;
        if(!this.chatUser.some(elem => elem.id === this.message.receivingUser.id)){
          this.chatUser.unshift(this.message.receivingUser);
          this.showingList.unshift(this.message.receivingUser);
        }
        this.message = {} as Message;

      },
      error => {
        this.sendError = true;
      }
    );
  }

  //TODO: aggiungere trim
  searchUser(value: string): void {
    if (value && value.trim() !== '') {
      this.showingList = this.userList.filter(us =>
        (us.name + ' ' + us.surname).toUpperCase().includes(value.toUpperCase()) && us.id !== this.user.id && us.type !== this.user.type);
    } else {
      this.showingList = this.chatUser;
    }
  }
}
