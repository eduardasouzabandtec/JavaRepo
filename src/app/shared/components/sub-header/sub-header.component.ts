import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit, OnChanges{
  @Input() repositories: any = []
  opened: number;
  closed = 0;
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
