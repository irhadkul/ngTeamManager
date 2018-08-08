import {Injectable} from '@angular/core';
import {Team} from './team';
import {Player} from './player';


@Injectable({
  providedIn: 'root'
})
export class TeamsGetService {
  teams: Team[] = [
    {
      name: 'Manchester United', id: '0', shortName: 'ManUtd',
      players: [
        {name: 'Irhad Kulanic', age: '27', position: 'LB'},
        {name: 'Paul Pogba', age: '27', position: 'CM'}
      ]
    },
    {
      name: 'Manchester City', id: '1', shortName: 'ManCity',
      players: [
        {name: 'Sergio Aguero', age: '29', position: 'CF'}
      ]
    }
  ];

  constructor() {
  }

  public getTeams(): Team[] {
    return this.teams.slice();
  }

  public getTeam(id): Team {
    return this.teams[id] || this.teams[0];
  }
  public getPlayers(teamId): Player[] {
    return this.teams[teamId].players.slice();
  }
}
