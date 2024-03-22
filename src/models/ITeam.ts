export interface ITeam {
  id: number;
  name: string;
  code?: string;
  country?: string;
  founded?: number;
  national?: boolean;
  logo: string;
  winner?: boolean | null;
} // end ITeam