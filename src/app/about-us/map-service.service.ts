import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapServiceService {

  public apiURL:string ='http://localhost:3000/employees';

  constructor(private http:HttpClient) { }

  public loadPublicData():Observable<any>{
    return this.http.get(this.apiURL);
  } 
}
