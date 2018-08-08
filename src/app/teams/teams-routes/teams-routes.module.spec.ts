import { TeamsRoutesModule } from './teams-routes.module';

describe('TeamsRoutesModule', () => {
  let teamsRoutesModule: TeamsRoutesModule;

  beforeEach(() => {
    teamsRoutesModule = new TeamsRoutesModule();
  });

  it('should create an instance', () => {
    expect(teamsRoutesModule).toBeTruthy();
  });
});
