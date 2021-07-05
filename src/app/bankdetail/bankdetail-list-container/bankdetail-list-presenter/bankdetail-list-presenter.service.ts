import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { BankdetailService } from '../../bankdetail.service';

@Injectable()
export class BankdetailListPresenterService {

  public bankdetailId: Subject<any> = new Subject();
  public bankdetailId$!: Observable<any>;
  bankdetailData: any = [];
  

  constructor(private restApi:BankdetailService) {

    this.bankdetailId$=this.bankdetailId.asObservable();
   }


  public deleteBankdetail(id: number) {
    debugger
    console.log('delete', id);
    
      this.restApi.deleteBankdetail(id).subscribe(()=>{

      })
    
  }

  public getBankDetailData(id: number) {
    debugger
    console.log('update', id);
    
      // this.restApi.getBankDetailData(id).subscribe((res:any)=>{
      //   this.bindForm.patchValue(res);

      // })
    
  }

}
