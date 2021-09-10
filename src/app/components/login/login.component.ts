import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {Admin} from "../../model/admin";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private routes: Router) { }

  admin: Admin = {} as Admin;
  credErr = false;
  logErr = false;

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') !== null){
      this.routes.navigateByUrl('/registrationRequest');
    }
  }

  onSubmit(): void {
    this.userService.login(this.admin).subscribe(
      response => {
        if (response.type !== 'admin'){
          this.logErr = true;
        }
        else {
          sessionStorage.setItem('selected', '0');
          sessionStorage.setItem('admin', JSON.stringify(response));
          this.routes.navigateByUrl('/registrationRequest');
        }
      },
      error => {
        this.credErr = true;
      });
  }
}
