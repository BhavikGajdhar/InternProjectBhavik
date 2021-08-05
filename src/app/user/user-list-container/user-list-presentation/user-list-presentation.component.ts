import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';
import { User } from '../../user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';


@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit,AfterViewInit,OnDestroy {

  searchText!: string;
  @ViewChild('Form')
  Form!: NgForm;
  public page = 1;
  public pageSize = 10;
  public  reverse!: boolean;
  public orderType!: string;
  public key!: string;

  @Input() public set userList(id: User[]){
    if(id){
      this._userList = id
    }
  }

  public get userList(): User[] {
    return this._userList
  }
  @Output() public sort: EventEmitter<any>=new EventEmitter();
  @Output() public search: EventEmitter<any>=new EventEmitter();
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();
 
  private _userList: User[] = [];

  constructor(private UserListPresenter:UserListPresenterService,
    private _viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
    ) { 
    this._userList=[];
  }
  ngOnDestroy(): void {
    this.showcomponent();
  }

  ngOnInit(): void {
    if(this.deleteId){
      this.UserListPresenter.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    });
   }
  
  }
  ngAfterViewInit():void{
    const inForm =this.Form.valueChanges;
    inForm!.pipe(
      
      map(data=>data.search),
      debounceTime(500),
      // switchMap(res=>this.api.getSearch(res))
      )
    .subscribe(res=>{
     this.search.emit(res)})
  }
  public deleteUser(id: number) {
    
    this.UserListPresenter.deleteUser(id)
  }
  showcomponent(){
    // this._viewContainerRef.clear();
    return this._viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(UserFormContainerComponent)
    );
  }

  public sortData(key: string): void {
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.UserListPresenter.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }


}
