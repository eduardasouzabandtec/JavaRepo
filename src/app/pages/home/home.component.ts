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
    if (changes.repositories) {
      console.log('oi')
    }
  }
  initCard() {
    this.repositoriesJavaService.getRepositories(1)
      .subscribe({
        next: (data: any) => this.repositories = data.items,
        error: (erro) => console.log(erro),
        complete: () => console.log(this.repositories)
      })
  }
}
