import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Structure} from "../../../model/structure";
import {StructureService} from "../../../services/structure.service";

@Component({
  selector: 'app-manage-structure',
  templateUrl: './manage-structure.component.html',
  styleUrls: ['./manage-structure.component.scss']
})
export class ManageStructureComponent implements OnInit {

  constructor(private route: Router, private structureService: StructureService,  private toastr: ToastrService) { }

  structure: Structure = {} as Structure;
  showingStructureList: Structure[] = [];
  structureList: Structure[] = [];

  ngOnInit(): void {
    if (sessionStorage.getItem('admin') == null){
      this.route.navigateByUrl('/login');
    }
    else {
      sessionStorage.setItem('selected', '3');

      this.structureService.findAllStructure().subscribe(
        response => {
          this.structureList = response;
          this.showingStructureList = response;
        },
        error => {
          this.toastr.error('Si è verificato un errore. Ricarica la pagina. \n' + error.message);
        }
      );
    }
  }

  goTo(path: string, structure: Structure | null, create: boolean): void {
    const navigationExtras: NavigationExtras = {
      state: {
        structure: structure,
        create: create
      }
    };
    this.route.navigateByUrl(path, navigationExtras);
  }

  searchStructure(value: string): void {
    this.showingStructureList = [];
    if (value === ''){
      this.showingStructureList = this.structureList;
    }
    this.structureList.find(item => {
      if (item.name.toUpperCase().includes(value.toUpperCase())) {
        this.showingStructureList.unshift(item);
      }
    });

  }


  delete(structure: Structure): void {
    this.structureService.delete(structure).subscribe(
      () => {
        this.structureList = this.structureList.filter(item => item.id !== structure.id);
        this.showingStructureList = this.structureList;
      },
      error => {
        this.toastr.error('Operazione fallita: \n' + error.message);
      });
  }

}
