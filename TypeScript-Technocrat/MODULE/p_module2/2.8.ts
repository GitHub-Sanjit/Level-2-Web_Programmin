{
  // promise
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
    return data;
  };
  getTodo();

  // simulate

  type Something = {
    something: string;
  };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Something" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to Load Data");
      }
    });
  };

  // calling create promise function

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };

  showData();
  //
}
