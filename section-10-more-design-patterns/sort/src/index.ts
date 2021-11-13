import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// * Number Collection
const numbersCollection = new NumbersCollection([3, -1, -5, 0, -12, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

// * Character Collection
const charactersCollection = new CharactersCollection('XaaYb');
charactersCollection.sort();
console.log(charactersCollection.data);

// * LinkedList
const linkedList = new LinkedList();
linkedList.add(20);
linkedList.add(-5);
linkedList.add(100);
linkedList.add(-100);
linkedList.add(2);
// sort
linkedList.sort();
linkedList.print();
