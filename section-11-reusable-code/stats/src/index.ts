import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something sattisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);

// Load file
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
