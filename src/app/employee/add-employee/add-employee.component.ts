import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

   
   Employee:any= [];
   //id = this.actRoute.snapshot.params['id'];
  
    public employeeDetails:Employee = { id:'',name: '', design : '', address:''};

    searchText!: string;
    
  


  constructor( public restApi: EmployeeService,
    public actRoute: ActivatedRoute ){

  }

  ngOnInit(): void {

    this.loadEmployees()
  }


 // Get All employeeData
  public loadEmployees() {
   return this.restApi.loadEmployeeData().subscribe((data: any) => {
    this.Employee = data;
   })
  }

// add and update employeeData
  public  addEmployee(){
    if(this.employeeDetails.id){
      
      return this.restApi.putEmployeeData(this.employeeDetails).subscribe((data:any)=>{
        //this.loadEmployees();
      })
    }else{

      return this.restApi.postEmployeeData(this.employeeDetails).subscribe((data:any)=>{
        this.loadEmployees();
        // console.log(data);
       })
    }
    
  }

  //addEmployee Data
//    public addEmployee(){
     
//    return this.restApi.postEmployeeData(this.employeeDetails).subscribe((data:any)=>{
//          // this.loadEmployees();
//           // console.log(data);
//          })
//  }
 
//Id get employeeData
  public getEmployee(id:number){
        return  this.restApi.getEmployeeData(id).subscribe((data:any)=>{
          
          this.employeeDetails=data;
          })
 }

// Update employeeData
//  public UpdateEmployee(){
//    debugger
//    return this.restApi.putEmployeeData(this.employeeDetails).subscribe((data:any)=>{
//      //this.loadEmployees();
//    })
  
//  } 


  //Delete employeeData
  public deleteEmployee(id:number) {
     return this.restApi.deleteEmployee(id).subscribe(()=> {
       // this.loadEmployees();
      })
    
  }
}
