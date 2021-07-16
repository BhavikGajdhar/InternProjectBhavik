import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponentComponent } from './user-card-component.component';

describe('UserCardComponentComponent', () => {
  let component: UserCardComponentComponent;
  let fixture: ComponentFixture<UserCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
