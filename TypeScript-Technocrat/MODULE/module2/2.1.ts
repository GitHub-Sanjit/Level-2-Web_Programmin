{
  // type assertion
  let anything: any;

  anything = "Next Level Wev Development";

  anything = 222;

  // (anything as number)

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (err) {
    console.log((err as CustomError).message);
  }

  //
}
