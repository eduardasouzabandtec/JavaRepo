import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, inject, async, tick, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { RepositoriesJavaService } from 'src/app/core/services/repositories-java.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let serviceRepositories: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [RepositoriesJavaService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(inject([RepositoriesJavaService], service => {
    serviceRepositories = service;
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  }));

  it("should subscribe getRepositories method is getting called ", fakeAsync(() => {
    let RESPONSE = [{
      "id": 22790488,
      "node_id": "MDEwOlJlcG9zaXRvcnkyMjc5MDQ4OA==",
      "name": "java-design-patterns",
      "full_name": "iluwatar/java-design-patterns"
    }];

    let repositoriesSpy = spyOn(serviceRepositories, 'getRepositories').and.returnValue(of(RESPONSE));
    let subSpy = spyOn(serviceRepositories.getRepositories(), 'subscribe');
    component.ngOnInit();
    tick();
    expect(repositoriesSpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

});
