import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BankdetailFormPresenterService } from '../bankdetail-form-presenter/bankdetail-form-presenter.service';

@Component({
  selector: 'app-bankdetail-form-presentation',
  templateUrl: './bankdetail-form-presentation.component.html',
  styleUrls: ['./bankdetail-form-presentation.component.css'],
  viewProviders: [BankdetailFormPresenterService]
})
export class BankdetailFormPresentationComponent implements OnInit {

  
  @Output() bankdetailData = new EventEmitter();
   

  public bankdetailForm: FormGroup = this.BankdetailFormPresenter.bindForm();

  constructor(
    private BankdetailFormPresenter: BankdetailFormPresenterService
  ) { }

  ngOnInit(): void {

    this.BankdetailFormPresenter.bankdetailData$.subscribe((res: any) => {
      debugger
      console.log(res)
      this.bankdetailData.emit(res)
    })
   

  }

  // get bankdetailFormControl() {

  //   return this.bankdetailForm.controls;
    
  // }

  public onSubmit() {
    debugger
    this.BankdetailFormPresenter.bankdetail(this.bankdetailForm)
  }


}
