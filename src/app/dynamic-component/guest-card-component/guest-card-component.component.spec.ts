import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCardComponentComponent } from './guest-card-component.component';

describe('GuestCardComponentComponent', () => {
  let component: GuestCardComponentComponent;
  let fixture: ComponentFixture<GuestCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
