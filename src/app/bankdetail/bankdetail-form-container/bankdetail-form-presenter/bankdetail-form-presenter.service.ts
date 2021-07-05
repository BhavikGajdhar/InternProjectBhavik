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

  //  public bindForm() {
  //   return new FormGroup({
  //     name: new FormControl(),
  //     acc_no: new FormControl(),
  //     email: new FormControl(),
  //     phone: new FormControl(),
  //     bank_name: new FormControl(),
  //     gender: new FormControl(),
  //     address: new FormControl(),
  //     amount: new FormControl(),
  //     currency_code: new FormControl()

  //   });
  // }

  public bindForm(): FormGroup {
    return this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/^[a-z0-9_-]{3,15}$/)]],
      acc_no: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],       
      email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],      
      phone: ['',[Validators.required,Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]],      
      bank_name: ['',Validators.required],      
      gender: ['',Validators.required],       
      address: ['',Validators.required],      
      amount: ['',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]],       
      currency_code: ['',Validators.required]      
    })
  }

  public bankdetail(bankdetailForm: FormGroup) {
    if (bankdetailForm.valid) {
      debugger
      console.log('done');
      this.bankdetailData.next(bankdetailForm.value);
      console.log(this.bankdetail);
    } else {
    }
  }
}
