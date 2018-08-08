import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-overview-default',
  templateUrl: './team-overview-default.component.html',
  styleUrls: ['./team-overview-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamOverviewDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
