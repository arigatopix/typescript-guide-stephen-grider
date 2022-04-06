import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something sattisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
// read data และเข้าถึง data ด้วย matchReader.matches
matchReader.load();

// Analyze 'Man United' wins
let manUnitedWins = 0;

// loop array
for (let match of matchReader.matches) {
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
