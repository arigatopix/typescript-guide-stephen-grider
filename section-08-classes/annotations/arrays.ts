const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// assign type annotations
const carMakers2: string[] = ['honda', 'issuzu'];

// 2 dimension array
// const carByMake = [['f150'], ['corolla']];
const carByMake: string[][] = [];

// Why use Type for arrays
//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(120);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
// const importantDates = [new Date(), '2021-10-25'];
const importantDates: (Date | string)[] = [];
importantDates.push('2023-01-21');
importantDates.push(new Date());
importantDates.push(120);
