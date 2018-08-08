import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
  {
    path: 'teams', loadChildren: '../../teams/teams.module#TeamsModule'
  },
  {path: '', redirectTo: 'teams', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class MainRoutesModule {
}

