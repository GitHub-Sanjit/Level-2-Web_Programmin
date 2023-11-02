{
  //
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "Sanjit",
    age: 50,
    gender: "male",
    contactNo: "0150000000",
    address: "ctg",
  };
  const student2: Student = {
    name: "Sanjit",
    age: 50,
    gender: "male",
    contactNo: "0150000000",
    address: "ctg",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Persian";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
