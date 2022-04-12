import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    // Analyze 'Man United' wins
    let wins = 0;

    // loop array
    for (let match of matches) {
      // check match แต่ละ column

      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        // Check Home team and Home win
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        // Check Away team and Away win
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
