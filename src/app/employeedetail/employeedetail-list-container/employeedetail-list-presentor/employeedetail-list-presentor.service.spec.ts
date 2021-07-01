import { TestBed } from '@angular/core/testing';

import { EmployeedetailListPresentorService } from './employeedetail-list-presentor.service';

describe('EmployeedetailListPresentorService', () => {
  let service: EmployeedetailListPresentorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeedetailListPresentorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
