import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailListPresentationComponent } from './employeedetail-list-presentation.component';

describe('EmployeedetailListPresentationComponent', () => {
  let component: EmployeedetailListPresentationComponent;
  let fixture: ComponentFixture<EmployeedetailListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedetailListPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
