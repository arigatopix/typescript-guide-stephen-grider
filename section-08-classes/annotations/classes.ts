// Create Blueprint
class Vehicle {
  // init fields
  color: string = 'red';

  constructor(color: string) {
    this.color = color;
  }

  private honk(): void {
    console.log('beep');
  }
}

// Create instance
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// // Extends Class
// class Car extends Vehicle {
//   private drive(): void {
//     console.log('vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
