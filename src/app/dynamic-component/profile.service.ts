import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfileService {
  private isLoggedIn = new BehaviorSubject(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public login() {
    this.isLoggedIn.next(true);
  }

  public logout() {
    this.isLoggedIn.next(false);
  }
  async loadComponent(viewContainerRef: ViewContainerRef, isLoggedIn: boolean) {
    const { GuestCardComponentComponent } = await import(
      './guest-card-component/guest-card-component.component'
    );
    const { UserCardComponentComponent } = await import(
      './user-card-component/user-card-component.component'
    );

    viewContainerRef.clear();
    let component: any = isLoggedIn
      ? UserCardComponentComponent
      : GuestCardComponentComponent;

    return viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(component)
    );
  }
}
