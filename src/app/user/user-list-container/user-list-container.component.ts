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

  public orderAs!: string;
  public fieldName!: string;
  //public searchString!: string;

  constructor( private userservice: UserService) { 
    this.userList$ = this.userservice.getUsers();
  }

  ngOnInit(): void {

  }
  private getUsers(): void {
    debugger
    this.userList$ = this.userservice.getUsersAll( this.fieldName, this.orderAs);
  }
  public onDeleteId(id: number) {
    
    this.userList$ = this.userservice.deleteUser(id)
  }
  public sort(value:any): void {
    debugger
    this.fieldName = value.key;
    this.orderAs = value.order;
    this.getUsers();
  }

}
