import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RepositoriesJavaService } from 'src/app/core/services/repositories-java.service';

@Component({
  selector: 'app-pull-request',
  templateUrl: './pull-request.component.html',
  styleUrls: ['./pull-request.component.scss']
})
export class PullRequestComponent implements OnInit {
  isPullRequest = true;
  user: string;
  nameRepositories: string;
  repositories: any = [];
  constructor(private route: ActivatedRoute, private repositoriesService: RepositoriesJavaService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.user = params['user'];
        this.nameRepositories = params['repositorie']
        this.getPullRequest();
      });
  }
  getPullRequest() {
    this.repositoriesService.getPullRequest(this.user, this.nameRepositories).subscribe((pullRequests) => this.repositories = pullRequests);
  }

}
