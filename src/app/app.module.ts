import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AppParentComponent } from './app-parent/app-parent.component';
import { HomeModule } from './home/home.module';
//import {HttpClientModule} from '@angular/commom/http';
//import {HttpClient} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForkjionComponent } from './forkjion/forkjion.component';
import { DynamicTemplatingComponent } from './dynamic-templating/dynamic-templating.component';
@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    AppParentComponent,
    ForkjionComponent,
    DynamicTemplatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
