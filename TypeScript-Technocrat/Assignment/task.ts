// Problem 1
function stringNumber(param: string | number): string | number {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * param;
  }
}

// Problem 2
interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: number;
}

function getAddressCity(person: Person): string | undefined {
  return person.address?.city;
}

// Problem 3
class Cat {
  name: string;
}
function isCat(obj: any): void {
  if (obj instanceof Cat) {
    console.log("Yes, it's a cat.");
  } else {
    console.log("No, it's not a cat.");
  }
}
// Problem 4
function totalNumberFromMixedData(array: any[]): number {
  let total: number = 0;
  array.forEach((num) => {
    if (typeof num === "number") {
      total = total + num;
    }
  });
  return total;
}

// Problem 5
interface Car {
  make: string;
  model: string;
  year: string;
}
interface Driver {
  name: string;
  licenseNumber: number;
}
function CarWithDriver(T: Car, U: Driver) {
  return { ...T, ...U };
}

// Problem 6
function arrayOfNumbers(array: unknown): void {
  let total = 0;
  if (
    Array.isArray(array) &&
    array.length > 0 &&
    array.every((item) => typeof item === "number")
  ) {
    array.forEach((item) => (total += item));
    console.log(total);
  } else {
    console.log("ERROR : Something Went Wrong");
  }
}

// Problem 7
function findFirstOccurrence<T extends any[], V extends keyof T>(
  arr: T,
  value: V
): number {
  return arr.indexOf(value);
}

// Problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
}
const user: Product[] = [
  {
    name: "watch",
    price: 102,
    quantity: 2,
  },
  {
    name: "cover",
    price: 102,
    quantity: 3,
  },
  {
    name: "book",
    price: 102,
    quantity: 5,
  },
];

function calculateCost(array: Product[]): number {
  let total: number = 0;
  array.forEach((product) => {
    total = product.price * product.quantity;
  });
  return total;
}


