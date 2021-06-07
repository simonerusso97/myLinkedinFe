import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-attribute',
  templateUrl: './manage-attribute.component.html',
  styleUrls: ['./manage-attribute.component.scss']
})
export class ManageAttributeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goTo(): void {
    this.route.navigateByUrl('admin/createAttribute');
  }
}
