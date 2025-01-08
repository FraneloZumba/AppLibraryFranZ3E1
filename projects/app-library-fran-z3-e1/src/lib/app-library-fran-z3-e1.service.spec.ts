import { TestBed } from '@angular/core/testing';

import { AppLibraryFranZ3E1Service } from './app-library-fran-z3-e1.service';

describe('AppLibraryFranZ3E1Service', () => {
  let service: AppLibraryFranZ3E1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLibraryFranZ3E1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
