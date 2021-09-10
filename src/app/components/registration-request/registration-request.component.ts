import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Regular} from '../../model/regular';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.scss']
})
export class RegistrationRequestComponent implements OnInit {
  userList: Regular[] = [];
  showingUserList: Regular[] = [];


  constructor(private userService: UserService, private routes: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') === null){
      this.routes.navigateByUrl('/login');
    }
    else{
      this.userService.findAllRegistrationRequest().subscribe(
        response => {
          this.userList = response;
          this.showingUserList = response;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  searchUser(value: string): void {
    this.showingUserList = [];
    if (value === ''){
      this.showingUserList = this.userList;
    }
    else{
      this.userList.find(item => {
        if ((item.name + ' ' + item.surname).toUpperCase().includes(value.toUpperCase()) && this.userList) {
          this.showingUserList.unshift(item);
        }
      });
    }
  }

  acceptUser(user: Regular): void {
    user.disabled = false;
    this.userService.acceptUsers(user).subscribe(
      response => {
        this.userList = this.userList.filter(item => item.id !== user.id);
        this.showingUserList = this.userList;
        this.toastr.success('OPERAZIONE COMPLETATA');
      },
      error => {
        user.disabled = true;
        this.toastr.error('OPERAZIONE FALLITA');
      });
  }
}
