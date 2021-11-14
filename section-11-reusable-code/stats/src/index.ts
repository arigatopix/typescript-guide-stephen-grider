import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');

// read file first
reader.read();

const dateOfFirstMatch = reader.data[0][0];

console.log(dateOfFirstMatch);

// Analyze 'Man United' wins
let manUnitedWins = 0;

// loop array
for (let match of reader.data) {
  // check match แต่ละ column

  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    // Check Home team and Home win
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    // Check Away team and Away win
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
