import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EmployeedetailListPresentorService {

  public employeeId:Subject<any>=new Subject();
  public employeeId$:Observable<any>

  constructor() {
    this.employeeId$=this.employeeId.asObservable();
   }
   public bindForm(){
     return new FormGroup({
       id: new FormControl(),
       name: new FormControl()
     })
   }
   public deleteEmployee(id:number){
    console.log('delete', id);
    this.employeeId.next(id);
   }

}
