import { IGoals } from "./IGoals";
import { ILeague } from "./ILeague";
import { IPeriods } from "./IPeriods";
import { IScore } from "./IScore";
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


export interface IStatus {
  long: string;
  short: string;
  elapsed: number | null;
} // end IStatus



export interface IFixtureItem {
  get?: string;
  parameters?: IParameters;
  errors?: any[];
  results?: number;
  paging?: IPaging;
  response?: IFixtureResponse[];
} // end IFixtureItem