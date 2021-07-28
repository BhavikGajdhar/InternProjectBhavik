import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
// {
//   providedIn: 'root'
// }

export class UsersharingService {

  constructor() { }

  private usersharing= new BehaviorSubject<string>('1Rivet');
  public castUser = this.usersharing.asObservable(); 

  editUser(newUser:any){
    this.usersharing.next(newUser);
  }
}
