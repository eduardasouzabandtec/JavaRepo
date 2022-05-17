import { Component } from '@angular/core';
import { FooterCard } from './shared/components/footer-card/footer-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-repositories';
  footerCard: FooterCard = {
    fork: '200',
    stars: '3000'
  }
}