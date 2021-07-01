import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailListContainerComponent } from './employeedetail-list-container/employeedetail-list-container.component';
import { EmployeedetailComponent } from './employeedetail.component';

const routes: Routes = [
  {
     path: '', component: EmployeedetailComponent,
     children:[
      
      {
        path:'',
        component:EmployeedetailListContainerComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeedetailRoutingModule { }
