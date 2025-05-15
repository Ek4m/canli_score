export interface ICountry {
  id: string;
  name: string;
  is_real: string;
  leagues: string;
  federation: {
    id: string;
    name: string;
  };
  national_team: {
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
    date: string;
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

export interface ILeagueTableMatch {
  league_id: string;
  season_id: string;
  name: string;
  rank: string;
  points: string;
  matches: string;
  goal_diff: string;
  goals_scored: string;
  goals_conceded: string;
  lost: string;
  logo: string;
  drawn: string;
  won: string;
  team_id: string;
  competition_id: string;
  group_id: string;
  group_name: string;
  stage_name: string;
  stage_id: string;
}

interface IEvent {
  id: string;
  match_id: string;
  player: string;
  time: string;
  event: string;
  sort: string;
  home_away: string;
  info: string;
}

export interface IMatchEvent {
  match: {
    id: string;
    date: string;
    home_name: string;
    away_name: string;
    score: string;
    ht_score: string;
    ft_score: string;
    et_score: string;
    ps_score: string;
    time: string;
    league_id: string;
    status: string;
    added: string;
    last_changed: string;
    home_id: string;
    away_id: string;
    competition_id: string;
    location: string;
    fixture_id: string;
    scheduled: string;
    home: {
      id: string;
      name: string;
      country_id: string;
      logo: string;
      stadium: string;
      location: string;
    };
    away: {
      id: string;
      name: string;
      country_id: string;
      logo: string;
      stadium: string;
      location: string;
    };
    competition: ILeague;
  };
  event: IEvent[];
}

export interface IMatchStats {
  yellow_cards: string;
  red_cards: string;
  substitutions: string;
  possesion: string;
  free_kicks: string;
  goal_kicks: string;
  throw_ins: string;
  offsides: string;
  corners: string;
  shots_on_target: string;
  shots_off_target: string;
  attempts_on_goal: string;
  saves: string;
  fauls: string;
  treatments: string;
  penalties: string;
  shots_blocked: string;
  dangerous_attacks: string;
  attacks: string;
}

export interface IMatchStatsPersist {
  home: { value: number; percent: number };
  away: { value: number; percent: number };
  winner: "h" | "a";
  sum: number;
  label: string;
}
