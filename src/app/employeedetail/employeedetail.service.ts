import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employeedetail } from './employeedetail.model';

@Injectable()
export class EmployeedetailService {
  public apiURL: string = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) {}

  // List of employee
  public loadEmployeeData(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  public deleteEmployee(id: number) {
    debugger;
    //return this.http.delete<any>(this.apiURL +value)
    return this.http.delete<Employeedetail>(this.apiURL + '/' + id);
  }
}
// public deleteCustomer(value:number):Observable<any>{
//   debugger
//   return of(true)
// }
