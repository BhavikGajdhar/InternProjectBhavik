import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeedetailService } from '../employeedetail.service';

@Component({
  selector: 'app-employeedetail-list-container',
  templateUrl: './employeedetail-list-container.component.html',
  styleUrls: ['./employeedetail-list-container.component.css']
})
export class EmployeedetailListContainerComponent implements OnInit {

  public employeeList$:Observable<any>=of();

  constructor(private employeeDeatailService:EmployeedetailService) { 
    
    this.employeeList$=this.employeeDeatailService.loadEmployeeData();
  }

  ngOnInit(): void {

  }
  public onDeleteId(id:number){
    this.employeeDeatailService.deleteEmployee(id)

  }

}
