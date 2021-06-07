import {Component, OnInit, ViewChild} from '@angular/core';
import {Regular} from '../../models/regular';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrls: ['./ban-user.component.scss']
})
export class BanUserComponent implements OnInit {

  userList: Regular[] = [];
  userListRadio: Regular[] = [];
  showingUserList: Regular[] = [];
  @ViewChild('radioButtons') radioButtons: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
      this.userListRadio = data;
      this.showingUserList = data;
    });
  }

  changeList(id: string): void {
    // TODO: pattern Strategy

    if (id === 'allUsersRadio'){
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

    this.showingUserList = this.userListRadio;
  }

  banUnban(user: Regular): void {
    this.userService.banUnban(user).subscribe(data => {
       this.userList = this.userList.filter(item => item.id !== user.id);
       this.showingUserList = this.userList;
    });
  }

  searchUser(value: string): void{
    this.showingUserList = [];
    if (value === ''){
      this.showingUserList = this.userListRadio;
    }
    this.userListRadio.find(item => {
      if (item.name.toUpperCase() === value.toUpperCase() || item.surname.toUpperCase() === value.toUpperCase()) {
        this.showingUserList.unshift(item);
      }
    });
  }
}
