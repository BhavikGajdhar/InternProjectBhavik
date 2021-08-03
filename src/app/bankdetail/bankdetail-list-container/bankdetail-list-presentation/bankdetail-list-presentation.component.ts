import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Bankdetail } from '../../bankdetail.model';
import { BankdetailService } from '../../bankdetail.service';
import { BankdetailListPresenterService } from '../bankdetail-list-presenter/bankdetail-list-presenter.service';

@Component({
  selector: 'app-bankdetail-list-presentation',
  templateUrl: './bankdetail-list-presentation.component.html',
  styleUrls: ['./bankdetail-list-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[BankdetailListPresenterService]
})
export class BankdetailListPresentationComponent implements OnInit,AfterViewInit {


  searchText!: string;
  @ViewChild('Form')
  Form!: NgForm;
  
  @Input() public set bankdetailList(id: Bankdetail[]){
    if(id){
      this._bankdetailList = id
    }
  }

  public get bankdetailList(): Bankdetail[] {
    return this._bankdetailList
  }

  @Output() public deleteId:EventEmitter<any> = new EventEmitter();
 
  private _bankdetailList: Bankdetail[] = [];
  
  constructor(
    private bankdetailListPresenter: BankdetailListPresenterService,
    private api:BankdetailService
  ) {
    this.bankdetailList = [];    
  }

  ngOnInit(): void {
    if(this.deleteId){
        this.bankdetailListPresenter.bankdetailId$.subscribe((bankdetailId) => {
        this.deleteId.emit(bankdetailId);
      });

    }
  }
  ngAfterViewInit():void{
    const inForm =this.Form.valueChanges;
    inForm!.pipe(
      
      map(data=>data.search),
      debounceTime(1000),
      switchMap(res=>this.api.getSearch(res))
      )
    .subscribe(res=>{
     this.bankdetailList=res})
  }
 
  public deleteBankdetail(id: number) {
    
    this.bankdetailListPresenter.deleteBankdetail(id)
  }
}
