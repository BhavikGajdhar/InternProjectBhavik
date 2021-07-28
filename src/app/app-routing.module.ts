import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppParentComponent } from './app-parent/app-parent.component';
import { DynamicTemplatingComponent } from './dynamic-templating/dynamic-templating.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { ExampleCdkComponent } from './example-cdk/example-cdk.component';
import { ForkjionComponent } from './forkjion/forkjion.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'subject', loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule) },
  { path: 'behaviour-subject', loadChildren: () => import('./behaviour-subject/behaviour-subject.module').then(m => m.BehaviourSubjectModule) },
  { path: 'rxjs-oparator', loadChildren: () => import('./rxjs-oparator/rxjs-oparator.module').then(m => m.RxjsOparatorModule) },
  { path: 'employeedetail', loadChildren: () => import('./employeedetail/employeedetail.module').then(m => m.EmployeedetailModule) },
  { path: 'forkjoin', component: ForkjionComponent},
  { path: 'dynamic-templating', component: DynamicTemplatingComponent},
  { path: 'example-cdk', component: ExampleCdkComponent},
  { path: 'bankdetail', loadChildren: () => import('./bankdetail/bankdetail.module').then(m => m.BankdetailModule) },
  { path: 'dynamic-component', loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
 
  { path:'**',component:AppParentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
