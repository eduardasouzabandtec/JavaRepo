import { Component, Input, OnInit } from '@angular/core';
import { DataIcon } from '../icon/icon.component';

export interface FooterCard {
  numberInfo: string,
  dataIcon: DataIcon
}
@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss']
})
export class FooterCardComponent implements OnInit {
  @Input() footercard: Array<FooterCard> = [{ numberInfo: '', dataIcon: {srcImage: '', typeIcon: '', alt: '' } }];
  
  constructor() { }

  ngOnInit(): void {
  }
}
