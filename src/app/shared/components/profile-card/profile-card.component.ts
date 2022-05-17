import { Component, Input, OnInit } from '@angular/core';
import { DataIcon } from '../icon/icon.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() dataIcon: DataIcon = {
    srcImage: 'dog.jpg',
    typeIcon: 'medium',
    alt: 'foto de perfil do usuario'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
