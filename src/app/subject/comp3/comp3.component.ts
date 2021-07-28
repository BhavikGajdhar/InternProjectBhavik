import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  Comp3Data:any='';

  constructor(private DataSharing:DatasharingService) { }

  ngOnInit(): void {
  
   this.DataSharing.SharingData.subscribe((res:any)=>{
     this.Comp3Data=res;
   })
  }
onSubmit(data:any){
  this.DataSharing.SharingData.next(data.value);
}
}
