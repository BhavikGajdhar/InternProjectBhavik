import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeedetailRoutingModule } from './employeedetail-routing.module';
import { EmployeedetailComponent } from './employeedetail.component';
import { EmployeedetailListContainerComponent } from './employeedetail-list-container/employeedetail-list-container.component';
import { EmployeedetailListPresentationComponent } from './employeedetail-list-container/employeedetail-list-presentation/employeedetail-list-presentation.component';
import { EmployeedetailService } from './employeedetail.service';


@NgModule({
  declarations: [
    EmployeedetailComponent,
    EmployeedetailListContainerComponent,
    EmployeedetailListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeedetailRoutingModule
  ],
  providers:[
    EmployeedetailService
  ]
})
export class EmployeedetailModule { }
