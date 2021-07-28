import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ComponentPortal, DomPortal, Portal, TemplatePortal} from '@angular/cdk/portal';
@Component({
  selector: 'app-example-cdk',
  templateUrl: './example-cdk.component.html',
  styleUrls: ['./example-cdk.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ExampleCdkComponent implements OnInit,AfterViewInit {

  

  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<any>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement> ;

  selectedPortal!: Portal<any> ;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any> ;
  domPortal!: DomPortal<any>; 

  isOpen = false;

  constructor(private _viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }
 
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`)
  
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  showcomponent(){
    // this._viewContainerRef.clear();
    // let component: any = true ,ResourcesComponent:any;
    return this._viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(ExampleCdkComponent)
    );
  }

}
@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample { }
