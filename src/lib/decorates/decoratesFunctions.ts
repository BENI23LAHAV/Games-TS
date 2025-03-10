//it's apply on the class itself

function greet(constructor: Function) {
  console.log(`hello from ${constructor.name}`);
}

//it's apply on the class propertys

function logProps(target: any, variableKey: string) {
  console.log(`hello from ${variableKey}`);
}

//it's apply on the method
function logFuncName(
  target: any,
  propertKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Im ${propertKey}`);
    args.forEach((item, index) => {
      console.log(index + 1 + ": " + item);
    });
    return original.apply(this, args);
  };
  return descriptor;
}

//it's apply on the method parameters
function logParam(target: any, methodKey: string, paramIndex: number) {
  console.log("im logParam");

  console.log(`hello from ${methodKey}`);
  console.log(paramIndex);
}

//it's apply on the get/set method

function logAccessor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Access happened on ${propertyKey}`);
}

export { greet, logFuncName, logParam, logAccessor, logProps };
