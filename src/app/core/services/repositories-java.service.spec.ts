import { TestBed } from '@angular/core/testing';

import { RepositoriesJavaService } from './repositories-java.service';

describe('RepositoriesJavaService', () => {
  let service: RepositoriesJavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoriesJavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
