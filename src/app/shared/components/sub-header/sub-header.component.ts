import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataIcon } from '../icon/icon.component';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit, OnChanges{
  @Input() repositories: any = []
  opened: number;
  closed = 0;
  dataIcon : DataIcon = {
    alt: 'Icone para voltar a home',
    typeIcon: 'mini'
  }
  srcImage = '../../../../assets/icons/right-arrow.png';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.opened = this.repositories.length;
    this.repositories.forEach((pullRequest) => {
      if (pullRequest.state !== 'open') {
        this.closed++;
      }
    })
  }

}
