import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployeedetailService {

  public apiURL:string ='http://localhost:3000/employee';

  constructor(private http:HttpClient) {
  }
  
  // List of employee
  public loadEmployeeData():Observable<any>{
    return this.http.get(this.apiURL);
  }
  
  public deleteEmployee(value:number):Observable<any>{
    debugger
    return of(true)
  }
}
