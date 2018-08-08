import { TestBed, inject } from '@angular/core/testing';

import { TeamsGetService } from './teams-get.service';

const team = {name: 'Manchester United', id: '0', shortName: 'ManUtd'};

describe('TeamsGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsGetService]
    });
  });

  it('should be created', inject([TeamsGetService], (service: TeamsGetService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a team based on id', inject([TeamsGetService], (service: TeamsGetService) => {
    expect(service.getTeam(0)).toEqual(team);
  }));
});
