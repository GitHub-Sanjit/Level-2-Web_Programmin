{
  // generic constraints with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "Car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Sanjit",
    age: 26,
    address: "ctg",
  };
  const car = {
    model: "Toyota",
    year: 2000,
  };
  const result1 = getPropertyValue(car, "model");

  //
}
