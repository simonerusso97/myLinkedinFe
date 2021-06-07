import {Component, OnInit, ViewChild} from '@angular/core';
import {Regular} from '../../models/regular';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.scss']
})
export class RegistrationRequestComponent implements OnInit {

  constructor(private userService: UserService) { }

  userList: Regular[] = [];
  showingUserList: Regular[] = [];
  @ViewChild('searchUserForm') searchUserForm: any;

  ngOnInit(): void {
    this.userService.getAllDisabledRegularUser().subscribe(data => {
      this.userList = data;
      this.showingUserList = data;
    });
  }

  acceptUser(user: Regular): void{
    this.userService.acceptUsers(user).subscribe(data => {
      this.userList = this.userList.filter(item => item.id !== user.id);
      this.showingUserList = this.userList;
    });
  }

  searchUser(value: string): void{
    this.showingUserList = [];
    if (value === ''){
      this.showingUserList = this.userList;
    }
    this.userList.find(item => {
      if (item.name.toUpperCase() === value.toUpperCase() || item.surname.toUpperCase() === value.toUpperCase()) {
        this.showingUserList.unshift(item);
      }
    });
  }

}
