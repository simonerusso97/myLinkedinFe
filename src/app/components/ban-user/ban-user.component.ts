import { Component, OnInit } from '@angular/core';
import {Regular} from '../../model/regular';
import {UserService} from '../../services/user.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrls: ['./ban-user.component.scss']
})
export class BanUserComponent implements OnInit {

  userList: Regular[] = [];
  userListRadio: Regular[] = [];
  showingUserList: Regular[] = [];

  constructor(private userService: UserService, private toastr: ToastrService, private routes: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('selected', '1');
    if (sessionStorage.getItem('admin') === null){
      this.routes.navigateByUrl('/login');
    }
    else{
      this.userService.getAllRegular().subscribe(
        response => {
          this.userList = response;
          this.showingUserList = response;
          this.userListRadio = response;
        },
        error => {
          this.toastr.error('Si è verificato un errore. Prova a ricaricare la pagina\n' + error);
        });
    }
  }

  changeList(id: string, userToSearch: HTMLInputElement): void {
    this.showingUserList = [];

    if (id === 'allUsersRadio'){
      this.userListRadio = [];
      this.userListRadio = this.userList;
    }
    if (id === 'bannedUsersRadio') {
      this.userListRadio = [];
      this.userList.forEach(item => {
        if (item.banned){
          this.userListRadio.unshift(item);
        }
      });
    }
    if (id === 'notBannedUsersRadio') {
      this.userListRadio = [];
      this.userList.forEach(item => {
        if (!item.banned){
          this.userListRadio.unshift(item);
        }
      });
    }
    userToSearch.value = '';
    this.showingUserList = this.userListRadio;
  }

  banUnban(user: Regular): void {
    user.banned = !user.banned;
    this.userService.banUnban(user).subscribe(
      () => {
        this.toastr.success('Operazione completata');
      },
      () => {
        this.toastr.error('Operazione fallita');
        user.banned = !user.banned;

      });
  }

  searchUser(value: string): void{
    this.showingUserList = [];
    if (value === ''){
      this.showingUserList = this.userListRadio;
    }
    else {
      this.userListRadio.forEach(item => {
        if ((item.name + ' ' + item.surname).toUpperCase().includes(value.toUpperCase())) {
          this.showingUserList.unshift(item);
        }
      });
    }
  }
}
