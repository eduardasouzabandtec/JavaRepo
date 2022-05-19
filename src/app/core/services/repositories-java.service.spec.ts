import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { RepositoriesJavaService } from './repositories-java.service';

describe('RepositoriesJavaService', () => {
  let service: RepositoriesJavaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RepositoriesJavaService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(RepositoriesJavaService)
  });

  it('should be able to create a service', inject([RepositoriesJavaService], (repositoriesService: RepositoriesJavaService) => {
    expect(repositoriesService).toBeDefined();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPullRequest', () => {
    const NAME_USER = 'spring';
    const NAME_REPOSITORIES = 'spring-boot';
    const URL = `https://api.github.com/repos/${NAME_USER}/${NAME_REPOSITORIES}/pulls`
    it('should call get with the correct URL', () => {
      service.getPullRequest(NAME_USER, NAME_REPOSITORIES).subscribe();

      httpTestingController.expectOne(URL);

      httpTestingController.verify();
    });

    it('should update the nameUser with Spring prefix', () => {
      service.getPullRequest(NAME_USER, NAME_REPOSITORIES)
        .subscribe((pull: any) => {
          expect(pull).toBeTruthy();
          const FIRST_PULL = pull[0];
          expect(FIRST_PULL.user).toBe(NAME_USER);
        });
      const REQUEST = httpTestingController.expectOne(URL);
      REQUEST.flush([{ user: 'spring' }]);
      httpTestingController.verify();
    });
  });

  describe('getRepositories', () => {
    const NAME_DISCRIPTION = 'Spring Boot';
    const NUMBER_PAGE = 1;
    const URL = `https://api.github.com/search/repositories?q=language:Java&sort=stars&page=${NUMBER_PAGE}`
    it('should call get with the correct URL', () => {
      service.getRepositories(NUMBER_PAGE).subscribe();

      httpTestingController.expectOne(URL);

      httpTestingController.verify();
    });

    it('should update the discription with Spring Boot prefix', () => {
      service.getRepositories(NUMBER_PAGE)
        .subscribe((repositories: any) => {
          expect(repositories).toBeTruthy();
          const FIRST_PULL = repositories[0];
          expect(FIRST_PULL.discription).toBe(NAME_DISCRIPTION);
        });
      const REQUEST = httpTestingController.expectOne(URL);
      REQUEST.flush([{ discription: 'Spring Boot', user: 'spring-projects' }]);
      httpTestingController.verify();
    });
  });
});
