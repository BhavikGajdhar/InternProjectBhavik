import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Employee } from './employee';

@Injectable()

// {
//   providedIn: 'root'
// }
export class EmployeeService {
  
  
  public apiURL:string ='http://localhost:3000/employees';

  constructor(private http:HttpClient) {
  }
  
  // List of employee
  public loadEmployeeData():Observable<any>{
    return this.http.get(this.apiURL);
  } 


  //  Create employee
   public postEmployeeData(data:Employee):Observable<Employee>{
   
    return this.http.post<Employee>(this.apiURL,data)
    // .pipe(retry(1),
    // catchError(this.handleError))
  } 
   
  // get employee
  public getEmployeeData(id:number):Observable<Employee>{
   
    return this.http.get<Employee>(this.apiURL+'/'+id)
    // .pipe(retry(1),
    // catchError(this.handleError))
  } 
//  Update employee
  public putEmployeeData(data:Employee):Observable<Employee>{
   
    return this.http.put<Employee>(this.apiURL +'/'+data.id,data)
    // .pipe(retry(1),
    // catchError(this.handleError))
  } 

  // Delete employee
  public deleteEmployee(id:number){
    return this.http.delete<Employee>(this.apiURL +'/'+ id)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }

} 




