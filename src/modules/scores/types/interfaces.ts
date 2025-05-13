export interface ICountry {
  id: string;
  name: string;
  is_real: string;
  leagues: string;
  federation: {
    id: string;
    name: string;
  };
}

export interface ILeague {
  id: string;
  name: string;
  is_league: string;
  is_cup: string;
  tier: string;
  has_groups: string;
}

export interface ILiveLeague {
  competition: ILeague;
  matches: {
    location: string;
    scheduled: string;
    country: ICountry;
    last_changed: string;
    status: string;
    fixture_id: number;
    round: string;
    home: {
      logo: string;
      id: number;
      name: string;
      country_id: number;
      stadium: string;
    };
    away: {
      logo: string;
      id: number;
      name: string;
      country_id: number;
      stadium: string;
    };
    id: number;
    federation: null;
    odds: {
      live: {
        "1": number;
        "2": number;
        X: number;
      };
      pre: {
        "1": number;
        "2": number;
        X: number;
      };
    };
    time: string;
    added: string;
    competition: ILeague;
    outcomes: {
      half_time: string;
      full_time: string;
      extra_time: null;
      penalty_shootout: null;
    };
    scores: {
      score: string;
      ht_score: string;
      ft_score: string;
      et_score: string;
      ps_score: string;
    };
    urls: {
      events: string;
      statistics: string;
      lineups: string;
      head2head: string;
    };
  }[];
}
