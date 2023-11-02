{
  //nullable types / unknown types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to Search");
    }
  };
  searchName(null);

  // unknown typeof

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else if (typeof value === "string") {
      const [res, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(res) * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    } else {
      console.log("Wrong Input");
    }
  };
  getSpeedInMeterPerSecond("1000 kmh^-1");

  // never type

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError("Mushkil se error hogaya");

  //
}
