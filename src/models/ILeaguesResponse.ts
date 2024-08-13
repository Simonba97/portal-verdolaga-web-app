import { ILeague } from "./ILeague";

export interface ILeaguesResponse {
    league: ILeague;
    country: ICountry;
} // end ILeaguesResponse

export interface ICountry {
    name: string;
    code: string;
    flag: string;
} // end ICountry