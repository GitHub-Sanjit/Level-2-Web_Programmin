{
  // destructuring

  const user = {
    id: 345,
    name: {
      firstName: "Sanjit",
      middleName: "Sarkar",
      lastName: "Sarkar",
    },
    contactNo: "o150000000",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { middleName: midName },
  } = user;

  // Array destructuring

  const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
  const [, , bestFriend, ...all] = myFriends;
}
