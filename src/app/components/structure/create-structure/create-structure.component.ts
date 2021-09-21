import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {StructureService} from "../../../services/structure.service";
import {AttributeService} from "../../../services/attribute.service";
import {Structure} from "../../../model/structure";
import {Attribute} from "../../../model/attribute";

@Component({
  selector: 'app-create-structure-component',
  templateUrl: './create-structure.component.html',
  styleUrls: ['./create-structure.component.scss']
})
export class CreateStructureComponent implements OnInit {


  structure: Structure = {} as Structure;
  create: boolean = false;
  constructor(private route: Router, private structureService: StructureService,
              private attributeService: AttributeService, private toastr: ToastrService) {
    const extras = this.route.getCurrentNavigation()?.extras?.state as {
      structure: Structure,
      create: boolean
    }
    this.create = extras.create;
    if(!extras.create){
      this.structure = extras.structure
    }

  }

  attributeList: Attribute[] = [];
  check: boolean[] = [];
  selectAttributeList: Attribute[] = [];
  success = {
    value: false,
    message: 'Operazione riuscita con successo!'
  };
  error = {
    value: false,
    message: 'Si è verificato un errore, riprova!'
  }
  errCheck = {
    value: false,
    message: 'Devi selezionarne almeno uno!'
  };
  button = false;

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') === null) {
      this.route.navigateByUrl('/login');
    }
    else {
      sessionStorage.setItem('selected', '3');
      if(!this.create){
        this.attributeList = this.structure.attributeList;
        if (this.structure.userType === 'offeror'){
          this.check[0] = true;

        }
        if (this.structure.userType === 'applicant'){
          this.check[1] = true;
        }
        if (this.structure.userType === 'all'){
          this.check[0] = true;
          this.check[1] = true;
        }
      }
      this.attributeService.findAllAttribute().subscribe(
        response => {
          this.selectAttributeList = response;
          this.selectAttributeList.forEach(
            (value, index) => {
              this.attributeList.forEach(
                (attribute) => {
                  if (value.id === attribute.id){
                    this.selectAttributeList.splice(index, 1);
                  }
                });
            });
        },
        error => {
          this.toastr.error('Si è verificato un errore \n' + error.message);
        });
    }

  }

  saveStructure(): void {

    if (!this.check[0] && !this.check[1]) {
      this.errCheck.value = true;
    } else {
      if (this.check[0] && this.check[1]) {
        this.structure.userType = 'all';
      } else if (this.check[0]) {
        this.structure.userType = 'offeror';
      } else if (this.check[1]) {
        this.structure.userType = 'applicant';
      }

      this.structure.attributeList = this.attributeList;
      if (this.create) {
        this.structureService.create(this.structure).subscribe(
          () => {
            this.create = true;
            this.success.value = true;
            this.error.value = false;
            this.errCheck.value = false;
            this.structure = {} as Structure;
            this.attributeService.findAllAttribute().subscribe(
              response => {
                this.selectAttributeList = response;
              },
              error => (this.toastr.error('Ho salvato le modifiche ma si è verificato un errore durate ' +
                'il reload. \n' + error.message))
            );
          },
          () => {
            this.error.value = true;
            this.success.value = false;
            this.errCheck.value = false;
          });
      } else {
        this.structureService.update(this.structure).subscribe(
          () => {
            this.error.value = false;
            this.success.value = true;
            this.errCheck.value = false
          },
          () => {
            this.error.value = true;
            this.success.value = false;
            this.errCheck.value = false;
          }
        );
      }
    }
  }

  goBack(): void {
    this.route.navigateByUrl('manageStructure');
  }

  addAttribute(attributeIndex: string): void {
    let attribute = this.selectAttributeList[Number(attributeIndex)]
    this.attributeList.unshift(attribute);
    this.selectAttributeList.splice(Number(attributeIndex), 1);
    this.button = false;
  }

  deleteAttribute(index: number): void {
    this.selectAttributeList.unshift(this.attributeList[index]);
    this.attributeList.splice(index, 1);
  }

}
