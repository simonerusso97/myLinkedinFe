import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {Offeror} from "../../model/offeror";
import {Applicant} from "../../model/applicant";

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.scss']
})
export class RegistrationRequestComponent implements OnInit {
  showingUserList: Offeror[] | Applicant[] = [];

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    console.log('registrestion log');
  }

  searchUser(value: string) {

  }

  acceptUser(item: any) {

  }
}
