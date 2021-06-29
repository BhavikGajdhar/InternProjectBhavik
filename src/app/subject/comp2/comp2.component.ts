import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

 Comp2Data:any='';

  constructor(private DataSharing:DatasharingService) { }

  ngOnInit(): void {
    this.DataSharing.SharingData.subscribe((res:any)=>{
      this.Comp2Data =res;
    })

  }
  onSubmit(data:any){
    this.DataSharing.SharingData.next(data.value);
  }

}
