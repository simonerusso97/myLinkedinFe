import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AttributeService} from '../../../services/attribute.service';
import {ToastrService} from 'ngx-toastr';
import {Attribute} from '../../../model/attribute';
import {Structure} from '../../../model/structure';

@Component({
  selector: 'app-manage-attribute',
  templateUrl: './manage-attribute.component.html',
  styleUrls: ['./manage-attribute.component.scss']
})
export class ManageAttributeComponent implements OnInit {

  constructor(private route: Router, private attributeService: AttributeService,  private toastr: ToastrService) {
    this.selectList.push('String');
    this.selectList.push('Number');
    this.selectList.push('Position');
    this.selectList.push('Image');
    this.selectList.push('PDF');
  }

  attributeList: Attribute[] = [];
  showingAttributeList: Attribute[] = [];
  structure: Structure[] = [];
  selectList: string[] = [];

  ngOnInit(): void {
    if (!sessionStorage.getItem('admin')){
      this.route.navigateByUrl('/login');
    }
    else {
      sessionStorage.setItem('selected', '4');
      this.attributeService.findAllAttribute().subscribe(
        response => {
          this.attributeList = response;
          this.showingAttributeList = response;
        }
      );
    }
  }

  goTo(): void {
    this.route.navigateByUrl('createAttribute');
  }

  searchAttribute(value: string): void {
    this.showingAttributeList = [];
    if (value === ''){
      this.showingAttributeList = this.attributeList;
    }
    this.attributeList.find(item => {
      if (item.name.toUpperCase().includes(value.toUpperCase())) {
        this.showingAttributeList.unshift(item);
      }
    });

  }

  enableModification(item: Attribute): void {
    item.isModifing = true;
  }

  save(attribute: Attribute, attributeName: string, attributeType: string): void {
    const nametemp = attribute.name;
    const typetemp = attribute.type;
    attribute.name = attributeName;
    attribute.type = attributeType;
    this.attributeService.updateAttribute(attribute).subscribe(
      () => {
        console.log(this.attributeList);
        this.showingAttributeList = this.attributeList;
        attribute.success = true;
        attribute.err = false;
      },
      error => {
        attributeName = nametemp;
        attribute.name = nametemp;

        attributeType = typetemp;
        attribute.type = typetemp;
        attribute.success = false;
        attribute.err = true;
        this.toastr.error('Operazione fallita: \n' + error.message);
      });
    attribute.isModifing = false;
  }

  delete(attribute: Attribute): void {
    this.attributeService.delete(attribute).subscribe(
      () => {
        this.attributeList = this.attributeList.filter(item => item.id !== attribute.id);
        this.showingAttributeList = this.attributeList;
      },
      error => {
        this.toastr.error('Operazione fallita: \n' + error.message);
      });
  }
}
