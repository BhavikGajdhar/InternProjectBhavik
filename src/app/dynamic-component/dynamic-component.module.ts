import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component.component';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile/profile.component';
import { GuestCardComponentComponent } from './guest-card-component/guest-card-component.component';
import { UserCardComponentComponent } from './user-card-component/user-card-component.component';


@NgModule({
  declarations: [
    DynamicComponentComponent,
    ProfileHostDirective,
    ProfileComponent,
    GuestCardComponentComponent,
    UserCardComponentComponent
  ],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ],
  providers:[ProfileService],
  entryComponents:[ UserCardComponentComponent,GuestCardComponentComponent]
})
export class DynamicComponentModule { }
