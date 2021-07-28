import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  id = this.actRoute.snapshot.params['id'];

  @Output() userData = new EventEmitter();
  public userForm: FormGroup = this.userFormPresenter.bindForm();

  constructor( private userFormPresenter: UserFormPresenterService,
                private actRoute: ActivatedRoute,
                private resApi: UserService
    ) {
      if (this.id) {
        this.resApi.getUserData(this.id).subscribe((res: any) => {
          this.userForm.patchValue(res);
        });
      }
     }

  ngOnInit(): void {
    this.userFormPresenter.userData$.subscribe((res: any) => {
      this.userData.emit(res);
    });
  }
  public onSubmit() {
    if(this.id){
      debugger
     this.userFormPresenter.user(this.userForm)
    }else{
      debugger
      this.userFormPresenter.user(this.userForm);
    }
    
  }

}
