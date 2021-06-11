import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Attribute} from '../../models/attribute';
import {Structure} from '../../models/structure';
import {AttributeService} from '../../services/attribute.service';
import {ToastrService} from 'ngx-toastr';
import { StructureService } from 'src/app/services/structure.service';

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

  @Input() item: Structure = {} as Structure;




  ngOnInit(): void {
    this.structureService.findAllStructure().subscribe(
      response => {
        this.structureList = response;
        this.showingStructureList = response;
      }
    );

  }

  goToNewStructure(): void {
    this.route.navigateByUrl('admin/createStructure');
  }
  goToModifica(structure: Structure ): void{
    this.route.navigateByUrl('admin/modifyStructure');
    this.item.name = structure.name;
    this.item.description = structure.description;


  }

  searchStructure(value: string): void {
    this.showingStructureList = [];
    if (value === ''){
      this.showingStructureList = this.structureList;
    }
    this.structureList.find(item => {
      if (item.name.toUpperCase() === value.toUpperCase()) {
        this.showingStructureList.unshift(item);
      }
    });

  }


  delete(structure: Structure): void {
    this.structureService.delete(structure).subscribe(
      response => {
        this.structureList = this.structureList.filter(item => item.id !== structure.id);
        this.showingStructureList = this.structureList;
      },
      error => {
        this.toastr.error('OPERAZIONE FALLITA');
      });
  }
}
