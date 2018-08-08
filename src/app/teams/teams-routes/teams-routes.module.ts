import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {TeamOverviewComponent} from '../team-overview/team-overview.component';
import {TeamOverviewDefaultComponent} from '../team-overview-default/team-overview-default.component';
import {TeamsComponent} from '../teams.component';
import {PlayersComponent} from '../team-overview/players/players.component';
import {InfoComponent} from '../team-overview/info/info.component';



const routes: Routes = [
  {path: '', component: TeamsComponent, children: [
      {path: ':id', component: TeamOverviewComponent , children: [
          {path: '', pathMatch: 'full', redirectTo: 'info'},
          {path: 'info', component: InfoComponent},
          {path: 'players', component: PlayersComponent}
        ]},
      {path: '', component: TeamOverviewDefaultComponent, pathMatch: 'full'}
    ]}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class TeamsRoutesModule {
}
