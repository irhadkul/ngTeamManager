import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeamsGetService} from '../../../shared/teams/teams-get.service';
import {Team} from '../../../shared/teams/team';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  team: Team;
  constructor(private route: ActivatedRoute, private teamsGetService: TeamsGetService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params) => {
        this.team = this.teamsGetService.getTeam(params.id);
      }
    );
  }

}
