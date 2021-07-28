import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserFormPresenterService {

  public userData: Subject<any> = new Subject();
  public userData$: Observable<any>;

  constructor(private fb:FormBuilder) {
    this.userData$ = this.userData.asObservable();
   }
   public bindForm(): FormGroup {
    return this.fb.group({
      firstname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],
      lastname: ['',[Validators.required,Validators.pattern(/^[a-zA-Z_-]{3,15}$/)]],       
      clientname: ['',Validators.required],      
      email: ['',[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],       
      office: ['',Validators.required],      
      contactnumber: ['',[Validators.required, Validators.minLength(12), Validators.maxLength(12)]]    
    })
  }
  public user(userForm: FormGroup) {
    if (userForm.valid) {
      this.userData.next(userForm.value);
    } 
  }
}
