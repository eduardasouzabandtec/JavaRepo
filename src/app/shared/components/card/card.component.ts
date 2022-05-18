import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() repositorie: any;
  @Input() isPullrequest: boolean;
  footerRepositories: {}

  constructor(private router: Router ){

  }
  ngOnInit(): void { }
  navigation() {
    this.router.navigate(['/pull-request'], { queryParams: { user: this.repositorie.owner.login, repositorie: this.repositorie.name } });
  }
}
