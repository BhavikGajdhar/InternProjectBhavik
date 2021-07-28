import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjionComponent } from './forkjion.component';

describe('ForkjionComponent', () => {
  let component: ForkjionComponent;
  let fixture: ComponentFixture<ForkjionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForkjionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForkjionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
