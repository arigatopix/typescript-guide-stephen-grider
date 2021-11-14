import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');

// read file first
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

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
