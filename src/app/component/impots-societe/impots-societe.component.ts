import { Component, OnInit, TemplateRef } from '@angular/core';
import { ImpotsSociete } from 'src/app/models/impotsSociete';
import {  BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ImpotsSocietesService } from 'src/app/services/impots-societes.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-impots-societe',
  templateUrl: './impots-societe.component.html',
  styleUrls: ['./impots-societe.component.css']
})
export class ImpotsSocieteComponent implements OnInit {
  modalRef: BsModalRef;
  filter = false;
  impotsSocietes;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;
  updatingError = false;
  emplyeToDelete;
  indexTodelete;
  employeToupdate;
  selectedEmployee;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newImpotsSociete = new ImpotsSociete();
  employees: any;

  constructor(private modalService: BsModalService, 
    // tslint:disable-next-line:align
    private router: Router,
    // tslint:disable-next-line:align
    private impotsSocietesService: ImpotsSocietesService,

    ) { }
  ngOnInit() {
        this.getAll();
        this.dataLoaded = true;
      }
    
      openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    
      }
      openDetailsModal(template: TemplateRef<any>, employee) {
        this.openModal(template);
        console.log('emddployee',employee);
        this.selectedEmployee = employee;
  
      }
      openUpdateModal(template: TemplateRef<any>, employee) {
        this.openModal(template);
        this.employeToupdate = employee;
  
      }
      openDeleteModal(confirmDelete:  TemplateRef<any>, employee, index) {
        this.emplyeToDelete = employee;
        this.openModal(confirmDelete);
        this.indexTodelete = index;
      }
    
      showFilter() {
        this.filter = !this.filter;
      }
    
      getAll() {

      }
      addEmployee() {

  
      }
      updateEmployee() {

      }
      ConifrmerDeclaration(impotsSociete){
        console.log('2222impotsSociete',ImpotsSociete)
        this.impotsSocietesService.changeStatus(ImpotsSociete,'true').subscribe(result => {})
        this.modalRef.hide();
        location.reload();
  
      }

}
