import { IGoals } from "./IGoals";
import { ILeague } from "./ILeague";
import { IPeriods } from "./IPeriods";
import { IScore } from "./IScore";
import { ITeam } from "./ITeam";
import { ITeams } from "./ITeams";
import { IVenue } from "./IVenue";

export interface IPaging {
  current: number;
  total: number;
} // end IPaging

export interface IParameters {
  next: string;
  team: string;
} // end IParameters

export interface IFixtureResponse {
  fixture: IFixture;
  league: ILeague;
  teams: ITeams;
  goals: IGoals;
  score: IScore;
} // end IFixtureResponse

export interface IFixturesStatisticsResponse {
  statistics: IStatistics[];
  team: ITeam;
} // end IFixturesStatisticsResponse

export interface ITeamsInformationResponse {
  team: ITeam;
  venue: IVenue;
} // end ITeamsInformationResponse

export interface IFixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  periods: IPeriods;
  venue: IVenue;
  status: IStatus;
} // end IFixture

export interface IStatistics {
  type: string;
  value: number | null;
} // end IStatistics


export interface IStatus {
  long: string;
  short: string;
  elapsed: number | null;
} // end IStatus

export interface IApiFootballResponse {
  get?: string;
  parameters?: IParameters;
  errors?: any[];
  results?: number;
  paging?: IPaging;
  response?: IFixtureResponse[] | ITeamsInformationResponse[];
} // end IApiFootballResponse