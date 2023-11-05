{
  // interface - generic

  interface Developer<T,X=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
      smartWatch: T;
      bike?:X
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const pooDeveloper: Developer<EmilabWatch> = {
    name: "Persian",
    computer: {
      brand: "Asus",
      model: "X-4e4e",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw88",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

    interface YamahaBike{
        model: string;
        engineCapacity:string
    }
  const richDeveloper: Developer<AppleWatch,YamahaBike> = {
    name: "RichDev",
    computer: {
      brand: "Hp",
      model: "X-4e4e",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "kw88",
      heartTrack: true,
      sleepTrack: true,
      },
      bike: {
          model: "Yamaha",
          engineCapacity:"100"
    }
  };
  //
}
