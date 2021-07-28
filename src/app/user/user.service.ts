import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserService {
  

  apiURL = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { }
  
  //List for User
  public getUsers(): Observable<any> {
    return this.http.get<any>(this.apiURL);
  }
  //Seaching For User
  getSearch(search: string):Observable<any>{
    
    return this.http.get<any>(this.apiURL+'?q='+search)
  }
  //Add User
  public addUser(data: User): Observable<User> {
    return this.http.post<User>(this.apiURL, data);
  }

  // Fetch Data By ID
  public getUserData(id: number): Observable<User> {
    return this.http.get<User>(this.apiURL + '/' + id);
  }

  // Update User By ID
  public putUserData(
    id: number,
    data: User
  ): Observable<User> {
    return this.http.put<User>(this.apiURL + '/' + id, data);
  }
  //Delete UserBy Id
  public deleteUser(id: number) {
    return this.http.delete<User>(this.apiURL + '/' + id);
  }
}
