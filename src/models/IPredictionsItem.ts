import { IFixture, IFixtureResponse } from "./IFixturesItem";
import { IGoals } from "./IGoals";
import { ILeague } from "./ILeague";
import { IScore } from "./IScore";
import { ITeams } from "./ITeams";

export interface IPredictionsResponse {
    predictions: any;
    league: any;
    teams: any;
    comparison: any;
    h2h: IFixtureResponse[]
} // end IPredictionsResponse