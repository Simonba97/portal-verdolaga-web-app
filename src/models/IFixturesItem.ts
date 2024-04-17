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
  events: any | null;
  lineups: any | null;
  players: any | null;
  statistics: IStatisticsInsideMatchData[] | null;
  fixture: IFixture;
  league: ILeague;
  teams: ITeams;
  goals: IGoals;
  score: IScore;
} // end IFixtureResponse

export interface IStandingsResponse {
  league: ILeague;
} // end IStandingsResponse

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

export interface IStatisticsInsideMatchData {
  statistics: IStatistics[],
  team: ITeam
} // end IStatisticsInsideMatchData


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
  response?: any[];
} // end IApiFootballResponse

export interface IRowStanding {
  rank: number;
  team: ITeam;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    }
  };
  home: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    }
  };
  away: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    }
  };
  update: string;
} // end IStatus