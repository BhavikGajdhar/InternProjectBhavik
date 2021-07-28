import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PhoneMaskDirective } from './user-form-container/user-form-presentation/phone-mask.directive';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    UserComponent,
    UserListContainerComponent,
    UserFormContainerComponent,
    UserFormPresentationComponent,
    UserListPresentationComponent,
    PhoneMaskDirective,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UserService],
})
export class UserModule { }
