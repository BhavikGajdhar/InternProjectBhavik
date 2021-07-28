import { Component, OnInit } from '@angular/core';
import { UsersharingService } from '../usersharing.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  name='Angular';
  user!:string;
  newUser!:string;

  constructor(private userSharing:UsersharingService) { }


  ngOnInit(): void {
    this.userSharing.castUser.subscribe((res)=>{
      this.user=res;
    });
  }
  public newUsers(user: any){
    return this.userSharing.editUser(this.newUsers);
  }

}
