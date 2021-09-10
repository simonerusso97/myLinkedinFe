import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  selected: string | null = '';

  ngOnInit(): void {
    if (sessionStorage.getItem('selected') != null) {
      this.selected = sessionStorage.getItem('selected');
    }
  }

  goTo(path: string): void {
    this.route.navigateByUrl(path);
  }

  logout(): void{
    sessionStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
