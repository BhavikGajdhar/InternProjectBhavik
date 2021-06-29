import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOparatorComponent } from './rxjs-oparator.component';

describe('RxjsOparatorComponent', () => {
  let component: RxjsOparatorComponent;
  let fixture: ComponentFixture<RxjsOparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsOparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
