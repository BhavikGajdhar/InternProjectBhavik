import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankdetailFormContainerComponent } from './bankdetail-form-container/bankdetail-form-container.component';
import { BankdetailListContainerComponent } from './bankdetail-list-container/bankdetail-list-container.component';
import { BankdetailComponent } from './bankdetail.component';

const routes: Routes = [
  {
    path: '',
    component: BankdetailComponent,
    children: [
      {
        path: '',
        component: BankdetailListContainerComponent,
      },
      {
        path: 'add',
        component: BankdetailFormContainerComponent,
      },
      {
        path: 'edit/:id',
        component: BankdetailFormContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankdetailRoutingModule {}
