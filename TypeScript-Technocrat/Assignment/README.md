
# Interview Questions

Interview Questions:

1. What are some benefits of using TypeScript over JavaScript in a project?
Answer: TypeScript allows us to define custom types which reduce runtime errors.
Code quality and productivity can be improved in TypeScript over JavaScript because of its static typing.
TypeScript allows to migrate different type of JavaScript version.


2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each
Answer: At the time of accessing properties and methods of an object, the output could be "Cannot read property 'x' of undefined". Which can generate an error of our application.
Here is an example to use optional chaining (?.).

### Examples

```Typescript
interface Person {
  address?: {
    city: string;
    street: string;
  };
  phone?: number;
}

function getAddressCity(person: Person): string | undefined {
  return person.address?.city;
}
```

Nullish coalescing (??) is used for setting alternative value when we know the accessing value would be null or undefined.

###  Examples

``` Typescript
  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
```


3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?.
Answer: To handle asynchronous operations we can follow this example:

###  Examples

``` Typescript
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async ():Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodo();
  type Something = { something: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };
  showData();
```
The advantage of using async/await over callbacks or Promises is about proper maintaining.
As we know about "callbacks hell" which is something hard to maintaining proper standart.
That's Why We should use async/await over callbacks.

4. How can you use TypeScript's enums, and what are their advantages?.
Answer:
###  Examples

``` Typescript
  enum Flower {
    Lili,
    Rose,
    Daisy,
    Tulip
  }

  let selectedFlower:Flower = Flower.Rose;
```
Typescript enum usage in code provide cleaner code, more readable code and less error-prone output.

5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.
Answer: Type guard is used to determine weather a value is a specific type or not.
For checking a value which is an array of numbers this could be an example

``` Typescript
function arrayOfNumbers(array: unknown): void {
  let total = 0;
  if (
    Array.isArray(array) &&
    array.length > 0 &&
    array.every((item) => typeof item === "number")
  ) {
    array.forEach((item) => (total += item));
    console.log(total);
  } else {
    console.log("ERROR : Something Went Wrong");
  }
}
```

6. Can you give an example of how to use "readonly" properties in TypeScript?

``` Typescript
  class Animal {
    readonly name:string;
    species:string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
  }
```
After constructing an object of Animal We could not change the value of name property.

7. Explain what a union type is in TypeScript and provide an example of its usage.
Answer: By using union type we can define variable or param that can hold multiple different types.

``` Typescript
  function stringNumber(param: string | number): string | number {
  if (typeof param === "string") {
    return param.length;
  } else {
    return param * param;
  }
}
```




