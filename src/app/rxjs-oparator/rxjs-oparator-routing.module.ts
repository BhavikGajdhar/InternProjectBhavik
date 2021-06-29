import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOparatorComponent } from './rxjs-oparator.component';

const routes: Routes = [{ path: '', component: RxjsOparatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOparatorRoutingModule { }
