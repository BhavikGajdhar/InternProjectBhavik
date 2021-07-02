import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employeedetail } from '../../employeedetail.model';
import { EmployeedetailListPresentorService } from '../employeedetail-list-presentor/employeedetail-list-presentor.service';

@Component({
  selector: 'app-employeedetail-list-presentation',
  templateUrl: './employeedetail-list-presentation.component.html',
  styleUrls: ['./employeedetail-list-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[EmployeedetailListPresentorService]
})
export class EmployeedetailListPresentationComponent implements OnInit {

  @Input() public set employeeList(value:Employeedetail[]){
    if(value){
      this._employeeList=value;
    }
  }

  public get employeeList():Employeedetail[]{
    return this._employeeList
  }

  @Output() public deleteId : EventEmitter<any> = new EventEmitter();

  private _employeeList:Employeedetail[]=[];
  //public employeeGroup:FormGroup;

  

  constructor(private employeedetailListPresentorService:EmployeedetailListPresentorService) { 
    this.employeeList=[];
    //this.employeeGroup= this.employeedetailListPresentorService.bindForm();
  }
   
  

  ngOnInit(): void {

    this.employeedetailListPresentorService.employeeId$.subscribe((employeeId)=>{
      this.deleteId.emit(employeeId);
    })
  }
   

  public deleteEmployee(id:number){
    this.employeedetailListPresentorService.deleteEmployee(id)
  }

 
  

}
