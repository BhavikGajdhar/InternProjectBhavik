import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedetailListContainerComponent } from './employeedetail-list-container.component';

describe('EmployeedetailListContainerComponent', () => {
  let component: EmployeedetailListContainerComponent;
  let fixture: ComponentFixture<EmployeedetailListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedetailListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
