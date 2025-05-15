import { IMatchStats, IMatchStatsPersist } from "../types";

export class ScoreMapper {
  private static labels = {
    yellow_cards: "Yellow cards",
    red_cards: "Red cards",
    substitutions: "Substitutions",
    possesion: "Possession",
    free_kicks: "Free kicks",
    goal_kicks: "Goal kicks",
    throw_ins: "Throw-ins",
    offsides: "Offsides",
    corners: "Corners",
    shots_on_target: "Shots on target",
    shots_off_target: "Shots off target",
    attempts_on_goal: "Attempts on goal",
    saves: "Saves",
    fauls: "Fouls",
    treatments: "Injuries treated",
    penalties: "Penalties",
    shots_blocked: "Shots blocked",
    dangerous_attacks: "Dangerous attacks",
    attacks: "Total attacks",
  };

  static mapMatchStats(match: IMatchStats) {
    const result: IMatchStatsPersist[] = [];
    Object.keys(match).forEach((key) => {
      const value: string = match[key as keyof IMatchStats];
      if (!!value) {
        const valueArray = value.split(":").map((e) => parseInt(e));
        console.log(valueArray);
        const sum = valueArray.reduce((a, b) => a + b, 0);
        result.push({
          label: this.labels[key as keyof typeof this.labels],
          away: {
            value: valueArray[1],
            percent: Math.trunc((valueArray[1] / sum) * 100),
          },
          home: {
            value: valueArray[0],
            percent: Math.trunc((valueArray[0] / sum) * 100),
          },
          winner: valueArray[0] > valueArray[1] ? "h" : "a",
          sum,
        });
      }
    });
    return result;
  }
}
