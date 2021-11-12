import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// * Number Collection
// const numbersCollection = new NumbersCollection([3, -1, -5, 0, -12, 4]);

// const sorter = new Sorter(numbersCollection);

// sorter.sort();

// console.log(numbersCollection.data);

// * Character Collection
// const charactersCollection = new CharactersCollection('XaaYb');
// const sorter = new Sorter(charactersCollection);

// // sorting
// sorter.sort();
// console.log(charactersCollection.data);

// * LinkedList
const linkedList = new LinkedList();

linkedList.add(20);
linkedList.add(-5);
linkedList.add(100);
linkedList.add(-100);
linkedList.add(2);

// sort
const sorter = new Sorter(linkedList);
sorter.sort();

// print to console
linkedList.print();
