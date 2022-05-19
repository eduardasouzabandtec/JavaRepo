import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PullRequestComponent } from 'src/app/pages/pull-request/pull-request.component';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, HomeComponent, PullRequestComponent ],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it('should navigation " " redirects to "/pull-request" ', fakeAsync(() => {
    expect(component).toBeTruthy();
    router.navigate(['pull-request']);
    tick();
    expect(location.path()).toBe('/pull-request')
  }));
});
