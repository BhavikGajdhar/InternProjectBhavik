import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsOparatorRoutingModule } from './rxjs-oparator-routing.module';
import { RxjsOparatorComponent } from './rxjs-oparator.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SearchPipe } from './switch-map/search.pipe';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RxjsOparatorComponent,
    SwitchMapComponent,
    SearchPipe,
    CombineLatestComponent,
    
  ],
  imports: [
    CommonModule,
    RxjsOparatorRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class RxjsOparatorModule { }
