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
  public searchString!: string;

  constructor( private userservice: UserService) { 
    this.userList$ = this.userservice.getUsers();
  }

  ngOnInit(): void {

  }
  private getUsers(): void {
    this.userList$ = this.userservice.getUsersAll( this.fieldName, this.orderAs);
  }
  private getUsersData(): void {
    this.userList$ = this.userservice.getSearch( this.searchString);
  }
  public onDeleteId(id: number) {
    
    this.userList$ = this.userservice.deleteUser(id)
  }
  public sort(value:any): void {
    this.fieldName = value.key;
    this.orderAs = value.order;
    this.getUsers();
  }
  public search(query: string): void {
    this.searchString = query;
    this.getUsersData();
  }

}
