import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Bankdetail } from '../../bankdetail.model';
import { BankdetailFormPresenterService } from '../bankdetail-form-presenter/bankdetail-form-presenter.service';

@Component({
  selector: 'app-bankdetail-form-presentation',
  templateUrl: './bankdetail-form-presentation.component.html',
  styleUrls: ['./bankdetail-form-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders: [BankdetailFormPresenterService]
})
export class BankdetailFormPresentationComponent implements OnInit {

  
  private _bankdetailIdData: Bankdetail[] = [];
  @Input() public set bankdetailDataById(id: Bankdetail[]){
    if(id){
      this._bankdetailIdData = id
      this.bankdetailForm.patchValue(this.bankdetailDataById)
    }
  }

  public get bankdetailDataById(): Bankdetail[] {
    return this._bankdetailIdData
  }
  
  @Output() bankdetailData = new EventEmitter();
 
  public bankdetailForm: FormGroup = this.BankdetailFormPresenter.bindForm();

  constructor(
    private BankdetailFormPresenter: BankdetailFormPresenterService,
   
  ) {

    this.bankdetailDataById=[]

   
  }

  ngOnInit(): void {
    this.BankdetailFormPresenter.bankdetailData$.subscribe((res: any) => {
      this.bankdetailData.emit(res);
    });
  }

  public onSubmit() {
    
     this.BankdetailFormPresenter.bankdetail(this.bankdetailForm)
    
    
  }
 
}
