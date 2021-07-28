import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BankdetailFormPresenterService {

  public bankdetailData: Subject<any> = new Subject();
  public bankdetailData$: Observable<any>;

  constructor(private fb:FormBuilder) {
    this.bankdetailData$ = this.bankdetailData.asObservable();
   }

  public bindForm(): FormGroup {
    return this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      acc_no: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],       
      email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],      
      phone: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],       
      bank_name: ['',Validators.required],      
      gender: ['',Validators.required],       
      address: ['',Validators.required],      
      amount: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],       
      currency_code: ['',Validators.required]      
    })
  }

  public bankdetail(bankdetailForm: FormGroup) {
    if (bankdetailForm.valid) {
      this.bankdetailData.next(bankdetailForm.value);
    } 
  }
  // pipe(map((res)=>{
  //   let check=this.bankdetailForm.get('gender')?.value;
  //   if(check=='Female'){
  //     debugger
  //     let data =res.amount*20/100
  //     debugger
  //     res.amount=res.amount+data;
  //   }else{
  //     debugger
  //     res.amount;
      
  //   }
  // }))
  
}
