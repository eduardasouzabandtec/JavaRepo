import { Component, OnInit } from '@angular/core';
import { FooterCard } from '../footer-card/footer-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  footerCard: Array<FooterCard> = [
    {
      numberInfo: '300',
      dataIcon: {
        srcImage: '../../../../assets/icons/star.png',
        typeIcon: 'mini',
        alt: 'icone de star'
      } 
    },
    {
      numberInfo: '900',
      dataIcon: {
        srcImage: '../../../../assets/icons/fork.png',
        typeIcon: 'mini',
        alt: 'icone de fork'
      } 
    }
  ]

}
