import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss']
})
export class FooterCardComponent implements OnInit {
  @Input() fork: number;
  @Input() star: number;
  iconStar = {
    dataIcon: {
      typeIcon: 'mini',
      alt: 'icone de star',
    },
    urlImage: '../../../../assets/icons/star.png'
  }
  iconFork = {
    dataIcon: {
      typeIcon: 'mini',
      alt: 'icone de fork',
    },
    urlImage: '../../../../assets/icons/fork.png'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
