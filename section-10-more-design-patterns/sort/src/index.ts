import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([3, -1, -5, 0, -12, 4]);

const sorter = new Sorter(numbersCollection);

sorter.sort();

console.log(numbersCollection.data);
