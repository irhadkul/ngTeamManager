import {Component, OnInit} from '@angular/core';
import {Team} from '../shared/teams/team';
import {TeamsGetService} from '../shared/teams/teams-get.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teamsList: Team[];

  constructor(private teamsGet: TeamsGetService) {
  }

  ngOnInit() {
    this.teamsList = this.teamsGet.getTeams();
  }

}
