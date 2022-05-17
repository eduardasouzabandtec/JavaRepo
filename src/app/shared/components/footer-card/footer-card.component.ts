import { Component, Input, OnInit } from '@angular/core';
import { DataIcon } from '../icon/icon.component';

export interface FooterCard {
  fork: string,
  stars: string,
}
@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss']
})
export class FooterCardComponent implements OnInit {
  @Input() footercard: FooterCard = {fork: '', stars: ''};
  @Input() dataIconfirst: DataIcon = {
    srcImage: 'star.png',
    typeIcon: 'mini',
    alt: 'icone de star'
  }
  @Input() dataIconLast: DataIcon = {
    srcImage: 'fork.png',
    typeIcon: 'mini',
    alt: 'icone de fork'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
