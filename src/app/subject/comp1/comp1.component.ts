import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  Comp1Data:any ='';

  constructor(private DataSharing:DatasharingService) {
    
   
   }
   ngOnInit(): void {

    this.DataSharing.SharingData.subscribe((res:any)=>{
      
      this.Comp1Data=res;
    })
  }
   onSubmit(data:any) {
    this.DataSharing.SharingData.next(data.value);
    
  }

}
