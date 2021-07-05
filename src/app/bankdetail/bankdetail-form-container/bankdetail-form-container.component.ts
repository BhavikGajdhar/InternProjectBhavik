import { Component, Input, OnInit } from '@angular/core';
import { Bankdetail } from '../bankdetail.model';
import { BankdetailService } from '../bankdetail.service';

@Component({
  selector: 'app-bankdetail-form-container',
  templateUrl: './bankdetail-form-container.component.html',
  styleUrls: ['./bankdetail-form-container.component.css']
})
export class BankdetailFormContainerComponent implements OnInit {


  constructor( private restApi: BankdetailService) { }

  ngOnInit(): void {
  }

  public addbankdetail(bankData:any){
    debugger
    this.restApi.addbankdetail(bankData).subscribe((res:any)=>{
      
    })
  }

}
