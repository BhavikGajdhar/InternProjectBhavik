import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.getEmployeeData()
   // this.postEmployeeData()
  }
  public getEmployeeData(){
  
     this.employeeService.loadEmployeeData().subscribe((res:any)=>{
      
       
     })
  }
}