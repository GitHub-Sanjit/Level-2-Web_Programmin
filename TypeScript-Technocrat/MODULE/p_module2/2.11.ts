{
  // utility types
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, keyof Person>;

  // Omit

  type ContactInfo = Omit<Person, "name" | "age">;
  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // ReadOnly
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Mr.XY",
    age: 200,
    contactNo: "017",
  };

  // person1.name =

  // Record
  // type MyObj = {
  //     a: string;
  //     b: string;
  // }

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}
