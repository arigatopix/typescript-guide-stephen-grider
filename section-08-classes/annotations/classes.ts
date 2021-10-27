// Create Blueprint
class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

// Extends Class
class Car extends Vehicle {
  // overwrite methods
  drive(): void {
    console.log('vroom');
  }
}

// Create instance
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
