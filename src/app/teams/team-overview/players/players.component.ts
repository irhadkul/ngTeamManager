import { Component, OnInit } from '@angular/core';
import {TeamsGetService} from '../../../shared/teams/teams-get.service';
import {ActivatedRoute} from '@angular/router';
import {Player} from '../../../shared/teams/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  constructor(private teamsGetService: TeamsGetService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log( this.route.snapshot.data);
    this.route.parent.params.subscribe(
      (params) => {
       this.players = this.teamsGetService.getPlayers(params.id);
      }
    );
  }

}
