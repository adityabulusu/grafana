import { NavIndex } from './navModel';
import { LocationState } from './location';
import { AlertRulesState } from './alerting';
import { TeamsState, TeamState } from './teams';
import { FolderState } from './folders';
import { DashboardState } from './dashboard';
import { DataSourcesState } from './datasources';
import { ExploreState } from './explore';
import { UsersState, UserState } from './user';
import { OrganizationState } from './organization';
import { AppNotificationsState } from './appNotifications';

export interface StoreState {
  navIndex: NavIndex;
  location: LocationState;
  alertRules: AlertRulesState;
  teams: TeamsState;
  team: TeamState;
  folder: FolderState;
  dashboard: DashboardState;
  dataSources: DataSourcesState;
  explore: ExploreState;
  users: UsersState;
  organization: OrganizationState;
  appNotifications: AppNotificationsState;
  user: UserState;
}
