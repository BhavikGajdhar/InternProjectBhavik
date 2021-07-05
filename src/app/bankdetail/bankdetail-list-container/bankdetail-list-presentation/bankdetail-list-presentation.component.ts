import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Bankdetail } from '../../bankdetail.model';
import { BankdetailListPresenterService } from '../bankdetail-list-presenter/bankdetail-list-presenter.service';

@Component({
  selector: 'app-bankdetail-list-presentation',
  templateUrl: './bankdetail-list-presentation.component.html',
  styleUrls: ['./bankdetail-list-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[BankdetailListPresenterService]
})
export class BankdetailListPresentationComponent implements OnInit {

  @Input() public set bankdetailList(id: Bankdetail[]){
    if(id){
      this._bankdetailList = id
    }
  }

  public search:FormControl = new FormControl();
  searchText!: string;

  public get bankdetailList(): Bankdetail[] {
    return this._bankdetailList
  }

  @Output() public deleteId:EventEmitter<any> = new EventEmitter();
 // @Output() public getId:EventEmitter<any> = new EventEmitter();

  private _bankdetailList: Bankdetail[] = [];
  // public bankGroup: FormGroup;
  
  constructor(
    private bankdetailListPresenter: BankdetailListPresenterService
  ) {
    this.bankdetailList = [];
    // this.bankGroup = this.bankdetailListPresenter.bindForm();
  }

  ngOnInit(): void {
    this.bankdetailListPresenter.bankdetailId$.subscribe((bankdetailId) => {
      this.deleteId.emit(bankdetailId);
    });

    // this.search.valueChanges
    //   .pipe(
    //     debounceTime(1000),
    //     switchMap((value) => {
    //      let d= this.bankdetailList.filter((item) => {
    //         debugger
    //         item.includes(value);
    //       })
    //       return d;
    //     }
    //     )
    //   )
    //   .subscribe((filterdata) => {
        
    //     this._bankdetailList.push(filterdata);
    //   });
  }
 
  public deleteBankdetail(id: number) {
    debugger
    this.bankdetailListPresenter.deleteBankdetail(id)
  }

  public getBankdetail(id: number) {
    debugger
    this.bankdetailListPresenter.getBankDetailData(id)
  }
  

}
