import { IFixtureResponse } from "./IFixturesItem";

export interface IPredictionsResponse {
    predictions: any;
    league: any;
    teams: any;
    comparison: any;
    h2h: IFixtureResponse[]
} // end IPredictionsResponse