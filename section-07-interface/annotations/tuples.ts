const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// ----  Arrays -----
// const pepsi = ['brown', true, 40];
// // change position
// pepsi[0] = true;
// pepsi[2] = 'brown';

// ----  TUPLES -----
// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Replace TUPLES use OBJECT better way
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
