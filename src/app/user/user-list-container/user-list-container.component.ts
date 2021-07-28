import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent implements OnInit {

  public userList$ : Observable<any> = of();

  constructor( private userservice: UserService) { 
    this.userList$ = this.userservice.getUsers();
  }

  ngOnInit(): void {
  }
  public onDeleteId(id: number) {
    
    this.userList$ = this.userservice.deleteUser(id)
  }

}
