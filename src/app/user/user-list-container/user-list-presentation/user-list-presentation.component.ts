import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit,AfterViewInit {

  searchText!: string;
  @ViewChild('Form')
  Form!: NgForm;

  @Input() public set userList(id: User[]){
    if(id){
      this._userList = id
    }
  }

  public get userList(): User[] {
    return this._userList
  }
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();
 
  private _userList: User[] = [];

  constructor(private UserListPresenter:UserListPresenterService,
    private api:UserService
    ) { 
    this._userList=[];
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
      debounceTime(1000),
      switchMap(res=>this.api.getSearch(res))
      )
    .subscribe(res=>{
     this.userList=res})
  }
  public deleteUser(id: number) {
    
    this.UserListPresenter.deleteUser(id)
  }

}
