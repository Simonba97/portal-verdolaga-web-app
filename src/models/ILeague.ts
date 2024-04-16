import { IRowStanding } from "./IFixturesItem";

export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  round: string;
  standings: IRowStanding[][]
} // end ILeague