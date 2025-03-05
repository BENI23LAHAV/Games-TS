type person = {
  name: string;
  age: number;
};

/**-----case 1----- */

type StringProperties<T> = {
  [Property in keyof T]: T[Property] extends string ? T[Property] : never;
};

//if you dont add age filed...
// Property 'age' is missing in type '{ name: string; }' but required in type 'StringProperties<person>'.ts(2741)
// bla.ts(3, 3): 'age' is declared here.
//if you added age filed...
//Type 'number' is not assignable to type 'never'.

/**-----case 2----- */

type StringProperties<T> = {
  [Property in keyof T as T[Property] extends string
    ? Property
    : never]: T[Property];
};
//if you added age filed...
//Object literal may only specify known properties, and 'age' does not exist in type 'StringProperties<person>'.

const person2: StringProperties<person> = {
  name: "ahmed",
};
