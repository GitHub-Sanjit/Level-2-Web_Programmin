{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  //   const mentors: string[] = ["Mr. X", "Mr.Y", "Mr.Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr.Y", "Mr.Z"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  //   type User = {
  //     name: string;
  //     age: number;
  //   };
  interface User {
    name: string;
    age: number;
  }

  const user: GenericArray<User> = [
    {
      name: "Sanjit",
      age: 100,
    },
    {
      name: "Sanjit",
      age: 110,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.X", "Mrs.Y"];

  const UserWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Sanjit", email: "a@gmail.com" },
  ];

  //
}
