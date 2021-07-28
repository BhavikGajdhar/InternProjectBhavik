import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.css']
})
export class UserFormContainerComponent implements OnInit {
  
  id = this.actRoute.snapshot.params['id'];

  constructor( private restApi: UserService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public adduser(userData: any) {
    debugger
    if (this.id) {
      this.restApi.putUserData(this.id, userData).subscribe();
    } else {
      this.restApi.addUser(userData).subscribe();
    }
  }

}
