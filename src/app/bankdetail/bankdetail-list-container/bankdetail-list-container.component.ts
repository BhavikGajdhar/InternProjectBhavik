import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BankdetailService } from '../bankdetail.service';

@Component({
  selector: 'app-bankdetail-list-container',
  templateUrl: './bankdetail-list-container.component.html',
  styleUrls: ['./bankdetail-list-container.component.css']
})
export class BankdetailListContainerComponent implements OnInit {

  

  public bankdetailList$ : Observable<any> = of();

  constructor(
    private bankdetailservice: BankdetailService
  ) {
    this.bankdetailList$ = this.bankdetailservice.getBankdetails();
   }

  ngOnInit(): void {
    
  }


  public onDeleteId(id: number) {
    
    this.bankdetailList$ = this.bankdetailservice.deleteBankdetail(id)
  }
    
}
