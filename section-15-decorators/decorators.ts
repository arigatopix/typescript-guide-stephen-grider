class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

// Decorators
function logError(target: any, key: string, desc: PropertyDecorator): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}
