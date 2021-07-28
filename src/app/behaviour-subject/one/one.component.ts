import { Component, OnInit } from '@angular/core';
import { UsersharingService } from '../usersharing.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private uesrSharing:UsersharingService) { }

  name='Angular';
  user!: string;
  //newUser!:string;
  public newUser:[] = [];

  ngOnInit(): void {
    this.uesrSharing.castUser.subscribe((res:any)=>{
      this.user=res;
    })
  }
  public editedUser(data:any){
    
    
   return this.uesrSharing.editUser(data.value);
   
  }

}
