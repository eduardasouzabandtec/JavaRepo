import { Component, Input, OnInit } from '@angular/core';

export interface DataIcon {
  typeIcon: string,
  alt: string
}
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() dataicon: DataIcon;
  @Input() urlImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
