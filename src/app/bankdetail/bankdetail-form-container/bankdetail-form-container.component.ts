import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BankdetailService } from '../bankdetail.service';

@Component({
  selector: 'app-bankdetail-form-container',
  templateUrl: './bankdetail-form-container.component.html',
  styleUrls: ['./bankdetail-form-container.component.css'],
})
export class BankdetailFormContainerComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];

  public bankdetailDataById$: Observable<any> = of();
  constructor(
    private restApi: BankdetailService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public addbankdetail(bankData: any) {
    debugger
    if (this.id) {
      this.restApi.putBankDetailData(this.id, bankData).subscribe();
    } else {
      this.restApi.addBankdetail(bankData).subscribe();
    }
  }
}
