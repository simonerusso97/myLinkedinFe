import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeService } from 'src/app/services/attribute.service';
import { Router } from '@angular/router';
import {Attribute} from '../../../model/attribute';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.scss']
})
export class CreateAttributeComponent implements OnInit {

  attribute: Attribute = {} as Attribute;
  err = false;
  selectList: string[] = ['String', 'Number', 'Position', 'Image', 'PDF'];

  submit = false;
  attributeForm: FormGroup;
  validationMessages = {
    name: [
      {type: 'required', message: 'Non può essere vuoto'}
    ],
    type: [
      {type: 'required', message: 'Non può essere vuoto'}
    ]
  };

  constructor(private attributeService: AttributeService, private route: Router, public formBuilder: FormBuilder) {
    this.attributeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') === null) {
      this.route.navigateByUrl('/login');
    }
    else{
      sessionStorage.setItem('selected', '4');
    }
  }
  onSubmit(): void{
    this.submit = true;
    if (this.attributeForm.valid){
      this.attribute.name = this.attributeForm.value.name;
      this.attribute.type = this.attributeForm.value.type;
      this.attribute.deletable = false;
      this.attributeService.createAttribute(this.attribute).subscribe(
        () => {
          this.attributeForm.reset();
          this.err = false;
          this.submit = false;
        },
        () => {
          this.err = true;
        }
      );
    }
  }

  goTo(): void {
    this.route.navigateByUrl('admin/manageAttribute');
  }

}
