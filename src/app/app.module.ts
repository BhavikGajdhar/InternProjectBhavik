import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AppParentComponent } from './app-parent/app-parent.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForkjionComponent } from './forkjion/forkjion.component';
import { DynamicTemplatingComponent } from './dynamic-templating/dynamic-templating.component';
import { ComponentPortalExample, ExampleCdkComponent } from './example-cdk/example-cdk.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    AppParentComponent,
    ForkjionComponent,
    DynamicTemplatingComponent,
    ExampleCdkComponent,
    ComponentPortalExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    
  ],
  entryComponents: [ExampleCdkComponent, ComponentPortalExample],
  providers: [],
  bootstrap: [AppComponent,ExampleCdkComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
