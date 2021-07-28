import { TestBed } from '@angular/core/testing';

import { UsersharingService } from './usersharing.service';

describe('UsersharingService', () => {
  let service: UsersharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
