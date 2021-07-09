import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bankdetail } from '../../bankdetail.model';
import { BankdetailService } from '../../bankdetail.service';
import { BankdetailFormPresenterService } from '../bankdetail-form-presenter/bankdetail-form-presenter.service';

@Component({
  selector: 'app-bankdetail-form-presentation',
  templateUrl: './bankdetail-form-presentation.component.html',
  styleUrls: ['./bankdetail-form-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders: [BankdetailFormPresenterService]
})
export class BankdetailFormPresentationComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  // private _bankdetailIdData: Bankdetail[] = [];
  // @Input() public set bankdetailDataById(id: Bankdetail[]){
  //   if(id){
  //     this._bankdetailIdData = id
  //   }
  // }

  // public get bankdetailDataById(): Bankdetail[] {
  //   return this._bankdetailIdData
  // }
  
  @Output() bankdetailData = new EventEmitter();
 
  public bankdetailForm: FormGroup = this.BankdetailFormPresenter.bindForm();

  constructor(
    private BankdetailFormPresenter: BankdetailFormPresenterService,
    private actRoute: ActivatedRoute,
    private resApi: BankdetailService
  ) {
    if (this.id) {
      this.resApi.getBankDetailData(this.id).subscribe((res: any) => {
        this.bankdetailForm.patchValue(res);
      });
    }
    // debugger
    // this.bankdetailDataById =[]  
    //this.BankdetailFormPresenter.bankdetailDataById(this.bankdetailForm);
  }

  ngOnInit(): void {
    this.BankdetailFormPresenter.bankdetailData$.subscribe((res: any) => {
      this.bankdetailData.emit(res);
    });
  }

  public onSubmit() {
    this.BankdetailFormPresenter.bankdetail(this.bankdetailForm);
  }
 
}
