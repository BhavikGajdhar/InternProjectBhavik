import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviourSubjectRoutingModule } from './behaviour-subject-routing.module';
import { BehaviourSubjectComponent } from './behaviour-subject.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { UsersharingService } from './usersharing.service';


@NgModule({
  declarations: [
    BehaviourSubjectComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    BehaviourSubjectRoutingModule
  ],
  providers:[
    UsersharingService
  ]
})
export class BehaviourSubjectModule { }
