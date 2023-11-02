{
  //spread operator
  // rest operator
  // destructuring

  // learn spread operator

  const bros1: string[] = ["ab", "bc", "cd", "de"];
  const bros2: string[] = ["ef", "fg", "gh", "hi"];

  bros1.push(...bros2);

  const mentors1 = {
    typescript: "abc",
    redux: "bce",
    dbms: "ced",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "kabul", "babul", "ubul", "labul");

  //
}
