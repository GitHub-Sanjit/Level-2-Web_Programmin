{
  // interface in Typescript

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User1 {
    role: string;
  }

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole2 = {
    name: "Sanjit",
    age: 100,
    role: "manager",
  };

  type rollNumber = number;
  //
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
