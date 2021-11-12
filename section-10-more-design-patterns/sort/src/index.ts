class Sorter {
  constructor(public collection: number[] | string) {
    // argument
  }

  sort(): void {
    const { length } = this.collection;

    // All of this only works if collection is number[]
    // If collection is an array of numbers
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // TypeGuards
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }

    // Only going to work if collection s string
    // If collection is a string, do this logic instead:
    // ~~~ logic to compare and swap characters in a string
    if (typeof this.collection === 'string') {
    }
  }
}

// initial instance
const sorter = new Sorter([3, -1, -5, 0, -12, 4]);

sorter.sort();

console.log(sorter.collection);
