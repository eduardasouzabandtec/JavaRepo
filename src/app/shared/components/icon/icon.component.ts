import { Component, Input, OnInit } from '@angular/core';

export interface DataIcon {
  srcImage: string,
  typeIcon: string,
  alt: string
}
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() dataicon: DataIcon = { srcImage: '', typeIcon: '', alt: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
