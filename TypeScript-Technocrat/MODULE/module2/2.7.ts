{
  // generic constraints with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const person1: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(
    obj: X,
    key: Y
  ) => {};

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "ctg",
    };
    
    const car = {
        model: "Toyota 100",
        year:200
    }

  const result1 = getPropertyValue(car,'year');

  // obj[key]

  //
}
