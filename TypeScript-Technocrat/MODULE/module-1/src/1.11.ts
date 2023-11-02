{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;

  // if (age >= 18) {
  //     console.log("adult");
  // } else {
  //     console.log("Not Adult");
  // }

  const isAdult = age >= 17 ? "adult" : "not adult";
  // console.log(isAdult);

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "guest";
//   console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Sanjit",
    address: {
      city: "ctg",
      road: "road",
      presentAddress: "ctg",
    },
    };
    
    const permanentAddress = user?.address?.permanentAddress ?? "No Address";
    console.log({permanentAddress});

  //
}
