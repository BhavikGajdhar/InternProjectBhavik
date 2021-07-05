import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankdetailRoutingModule } from './bankdetail-routing.module';
import { BankdetailComponent } from './bankdetail.component';
import { BankdetailListContainerComponent } from './bankdetail-list-container/bankdetail-list-container.component';
import { BankdetailListPresentationComponent } from './bankdetail-list-container/bankdetail-list-presentation/bankdetail-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BankdetailService } from './bankdetail.service';
import { BankdetailFormContainerComponent } from './bankdetail-form-container/bankdetail-form-container.component';
import { BankdetailFormPresentationComponent } from './bankdetail-form-container/bankdetail-form-presentation/bankdetail-form-presentation.component';
import { SearchPipe } from './bankdetail-list-container/bankdetail-list-presentation/search.pipe';

@NgModule({
  declarations: [
    BankdetailComponent,
    BankdetailListContainerComponent,
    BankdetailListPresentationComponent,
    BankdetailFormContainerComponent,
    BankdetailFormPresentationComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    BankdetailRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [BankdetailService],
})
export class BankdetailModule {}
