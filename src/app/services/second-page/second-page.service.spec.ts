import { TestBed } from '@angular/core/testing';

import { SecondPageService } from './second-page.service';

describe('SecondPageService', () => {
  let service: SecondPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
