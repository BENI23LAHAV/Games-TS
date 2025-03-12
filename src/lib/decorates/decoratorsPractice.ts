/**---------- Section 1 ---------- */

function addID<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    id: number;
    constructor(...args: any[]) {
      super(...args);
      this.id = Math.floor(Math.random() * 9000) + 1000;
      // console.log("New Person ", this.id);
    }
  };
}
//What happened here?
//As you cas see, we are creating a decorator for the class.
//The decorator gets the class and returns the class with the new properties and new method.

/**---------- Section 2 ---------- */
function ClassDecorator(constructor: Function) {
  // console.log("5: Class Decorator");
}

function PropertyDecorator(target: any, propertyKey: string) {
  // console.log("1: Property Decorator:", propertyKey);
}

function MethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // console.log("3: Method Decorator:", propertyKey);
}

function ParameterDecorator(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  // console.log("2:  Parameter Decorator:", propertyKey, parameterIndex);
}

function AccessDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // console.log("4: Access Decorator:", propertyKey);
}

@ClassDecorator
@addID
class Person {
  name: string = "Yoni";
  @PropertyDecorator
  firstName: string = "Yoni";
  @MethodDecorator
  getFullName(@ParameterDecorator firstName: string, lastName: string) {
    return firstName + " " + lastName;
  }
  @AccessDecorator
  getFirstName() {
    return this.firstName;
  }
  @Debounce()
  onClick() {
    console.log("Clicked");
  }
}
//What happened here?
//As you can see, We demonstrated the order of the decorators called.
//Every decorator log to console, so we can see the order.
//
//The order is:
//1. Property Decorator
//2. Parameter Decorator
//3. Method Decorator
//4. Access Decorator
//5. Class Decorator

/**---------- Section 3 ---------- */

function Debounce(delay: number = 500) {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let timeout;
      clearTimeout(timeout);
      console.log(`Function will apply after ${delay / 1000}sec`);

      setTimeout(() => {
        original.apply(this, args);
      }, delay);
    };
    return descriptor;
  };
}
//What happened here?
//As you can see, We created a decorator for the method.
//The decorator gets a number(optional) and delay the user according to the number.

/**---------- Section 4 ---------- */
const p1 = new Person();
// console.log(p1.id);

// console.log("New Person ", p1.id);

export { Person, Debounce, addID };
