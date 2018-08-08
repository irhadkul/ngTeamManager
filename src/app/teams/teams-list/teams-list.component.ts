import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../shared/teams/team';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  @Input() teams: Team[];
  constructor() { }

  ngOnInit() {
  }

}
