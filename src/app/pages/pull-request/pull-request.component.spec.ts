import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, inject, async, tick, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { RepositoriesJavaService } from 'src/app/core/services/repositories-java.service';
import { PullRequestComponent } from './pull-request.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('PullRequestComponent', () => {
  let component: PullRequestComponent;
  let fixture: ComponentFixture<PullRequestComponent>;
  let serviceRepositories: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PullRequestComponent],
      providers: [RepositoriesJavaService],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(inject([RepositoriesJavaService], service => {
    serviceRepositories = service;
    fixture = TestBed.createComponent(PullRequestComponent);
    component = fixture.componentInstance;
  }));

  it("should subscribe getPullRequest method is getting called ", fakeAsync(() => {
    const RESPONSE = [{
      state: "open",
      statuses_url: "https://api.github.com/repos/macrozheng/mall/statuses/f76ae04d4a59a93200469377cb1d2442b0b20b8e",
      title: "Update pom.xml",
      updated_at: "2022-04-22T03:25:23Z",
      url: "https://api.github.com/repos/macrozheng/mall/pulls/537"
    }];
    const NAME_USER = 'spring';
    const NAME_REPOSITORIES = 'spring-boot';


    let repositoriesSpy = spyOn(serviceRepositories, 'getPullRequest').and.returnValue(of(RESPONSE));
    let subSpy = spyOn(serviceRepositories.getPullRequest(NAME_USER, NAME_REPOSITORIES), 'subscribe');
    component.getPullRequest();
    tick();
    expect(repositoriesSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));
});
