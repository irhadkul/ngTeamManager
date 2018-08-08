import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamsComponent} from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import {TeamsRoutesModule} from './teams-routes/teams-routes.module';
import { TeamOverviewDefaultComponent } from './team-overview-default/team-overview-default.component';
import {MatGridListModule, MatListModule} from '@angular/material';
import { PlayersComponent } from './team-overview/players/players.component';
import { InfoComponent } from './team-overview/info/info.component';
import {DirectivesModule} from '../shared/directives/directives.module';

@NgModule({
  entryComponents: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutesModule,
    MatListModule,
    MatGridListModule,
    DirectivesModule
  ],
  exports: [
  ],
  declarations: [TeamsComponent, TeamsListComponent, TeamOverviewComponent,
    TeamOverviewDefaultComponent, PlayersComponent, InfoComponent]
})
export class TeamsModule {
}
