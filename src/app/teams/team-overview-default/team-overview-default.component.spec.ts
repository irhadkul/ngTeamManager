import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOverviewDefaultComponent } from './team-overview-default.component';

describe('TeamOverviewDefaultComponent', () => {
  let component: TeamOverviewDefaultComponent;
  let fixture: ComponentFixture<TeamOverviewDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOverviewDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOverviewDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
