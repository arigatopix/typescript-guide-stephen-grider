const add = (a: number, b: number) => {
  return a + b;
};

// Type Annotations for return Value
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Assign Type Annotations for Function
function devide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Function return null or return undefined
const logger = (message: string): void => {
  console.log(message);
};

// Function throw error (not return anything but execute function)
const throwError = (message: string): never => {
  throw new Error(message);
};

// - return something
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return 'return someting';
};

// - return null
const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};
