@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Something Bad 😔')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generatorWake: boolean
  ): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

// Class decorator
function classDecorator(constructor: typeof Boat) {
  console.log('--Classes decorator--');
  console.log(constructor);
}

// PARAMETER DECORATORS
function parameterDecorator(target: any, key: string, index: number) {
  console.log('--Parameter decorator--');
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log('--FIND KEY PROPS in Instance--');
  console.log(key);
}

// Decorators Factories
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
