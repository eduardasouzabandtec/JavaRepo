import { Component, Input, OnInit } from '@angular/core';
import { DataIcon } from '../icon/icon.component';

export interface DataProfile {
  userName: string
  dataIcon: DataIcon
}
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  @Input() username: string;
  @Input() urlImage: string;
  @Input() isPullRequest: boolean;
  dataIcon: DataIcon = {
    typeIcon: 'medium',
    alt: 'foto de perfil do usuario'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
