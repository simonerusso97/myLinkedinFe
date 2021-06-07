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
    if (localStorage.getItem('selected') != null) {
      this.selected = localStorage.getItem('selected');
    }
  }

  goTo(path: string): void {

    if (path === '/admin/registrationRequest'){
      localStorage.setItem('selected', '0');
    }
    if (path === '/admin/banUser'){
      localStorage.setItem('selected', '1');
    }
    if (path === '/admin/manageAttribute'){
      localStorage.setItem('selected', '4');
    }
    this.route.navigateByUrl(path);

  }
}
