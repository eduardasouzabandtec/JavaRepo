import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RepositoriesJavaService } from 'src/app/core/services/repositories-java.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  repositories: any = [];
  constructor(private repositoriesJavaService: RepositoriesJavaService) { }

  ngOnInit(): void {
    this.initCard();
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  initCard() {
    this.repositoriesJavaService.getRepositories(1)
      .subscribe((data: any) => this.repositories = data.items);
  }
}
