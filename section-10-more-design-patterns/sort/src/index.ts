import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// * Number Collection
// const numbersCollection = new NumbersCollection([3, -1, -5, 0, -12, 4]);

// const sorter = new Sorter(numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);

// * Character Collection
const charactersCollection = new CharactersCollection('XaaYb');
const sorter = new Sorter(charactersCollection);

// sorting
sorter.sort();
console.log(charactersCollection.data);
