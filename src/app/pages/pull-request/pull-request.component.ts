import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.scss']
})
export class PullRequestComponent implements OnInit {
  isPullrequest = true;
  user: string;
  repositories: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.user = params['user'];
        this.repositories = params['repositorie']
        this.getPullRequest();
        
      });
  }
  getPullRequest() {
    console.log(this.user, this.repositories)
  }

}
