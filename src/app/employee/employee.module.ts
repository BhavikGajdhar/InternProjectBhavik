import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';
import { EmployeeService } from './employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './add-employee/filter.pipe';


@NgModule({
  declarations: [
     EmployeeComponent,
    AddEmployeeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule {
  
 }
