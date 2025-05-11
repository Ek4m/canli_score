export interface ICountry {
  id: string;
  name: string;
  is_real: string;
  leagues: string;
}

export interface ILeague {
  id: string;
  name: string;
  is_league: string;
  is_cup: string;
  tier: string;
  has_groups: string;
}
