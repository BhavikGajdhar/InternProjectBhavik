import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class BankdetailListPresenterService {
  

  public bankdetailId: Subject<any> = new Subject();
  public bankdetailId$!: Observable<any>;
  bankdetailData: any = [];
  

  constructor() {

    this.bankdetailId$=this.bankdetailId.asObservable();
   }


  public deleteBankdetail(id: number) {
  
    console.log('delete', id);
    
    this.bankdetailId.next(id);
    
  }

}
