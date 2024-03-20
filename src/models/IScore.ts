import { IGoals } from "./IGoals";

export interface IScore {
  halftime: IGoals;
  fulltime: IGoals;
  extratime: IGoals;
  penalty: IGoals;
} // end IScore
