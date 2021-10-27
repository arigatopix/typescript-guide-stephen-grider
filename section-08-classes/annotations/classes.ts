// Create Blueprint
class Vehicle {
  protected drive(): void {
    console.log('chugga chugga');
  }

  private honk(): void {
    console.log('beep');
  }
}

// Extends Class
class Car extends Vehicle {
  // overwrite methods
  drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

// Create instance
const vehicle = new Vehicle();
// -- Private not access methods
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.startDrivingProcess();
car.honk();
