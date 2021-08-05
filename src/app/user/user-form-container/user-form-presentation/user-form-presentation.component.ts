import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user.model';
import { UserService } from '../../user.service';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit {

  
  private _userIdData: User[] = [];
  @Input() public set UserDataById(id: User[]){
    if(id){
      this._userIdData = id
    }
    this.userForm.patchValue(this.UserDataById)
  }

  public get UserDataById(): User[] {
    return this._userIdData
  }

  @Output() userData = new EventEmitter();
  public userForm: FormGroup = this.userFormPresenter.bindForm();

  constructor( private userFormPresenter: UserFormPresenterService) {
    this.UserDataById=[]
     }

  ngOnInit(): void {
    this.userFormPresenter.userData$.subscribe((res: any) => {
      this.userData.emit(res);
    });
  }
  public onSubmit() {
    this.userFormPresenter.user(this.userForm) 
  }
   
}
