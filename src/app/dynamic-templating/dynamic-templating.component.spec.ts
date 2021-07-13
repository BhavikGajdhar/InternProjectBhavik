import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTemplatingComponent } from './dynamic-templating.component';

describe('DynamicTemplatingComponent', () => {
  let component: DynamicTemplatingComponent;
  let fixture: ComponentFixture<DynamicTemplatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTemplatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTemplatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
