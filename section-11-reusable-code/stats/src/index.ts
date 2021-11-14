import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

const homwWin = 'H';
const awayWin = 'A';
const draw = 'D';

// Analyze 'Man United' wins
let manUnitedWins = 0;

// loop array
for (let match of matches) {
  // check match แต่ละ column

  if (match[1] === 'Man United' && match[5] === homwWin) {
    // Check Home team and Home win
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === awayWin) {
    // Check Away team and Away win
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
