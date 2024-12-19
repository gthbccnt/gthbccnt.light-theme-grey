function showcase() {
  const constantValue = 42;
  let mutableValue = 'Hello, World!';
  var globalValue = true;

  const regularFunction = (param1, param2) => param1 + param2;
  const arrowFunction = (a, b) => a * b;

  class TestClass {
    constructor(name) {
      this.name = name;
    }
    sayName() {
      console.log(`My name is ${this.name}`);
    }
  }

  arrowFunction(2, 3);
  regularFunction('test', 2);
  const classInstance = new TestClass('VSCode');
  classInstance.sayName();

  const testObject = {
    stringProp: 'This is a string',
    numberProp: 123,
    booleanProp: true,
    nestedObject: { innerProp: 'Inner Value' },
    arrayProp: [1, 2, 3],
    methodProp() {
      return 'I am a method';
    },
    arrowMethod: () => 'Arrow Function Method',
  };

  for (let i = 0; i < 5; i++) console.log(i);
  const array = [1, 2, 3, 4, 5];
  array.forEach((num) => console.log(num));
  for (const num of array) console.log(num);

  const templateString = `Constant Value: ${constantValue}, Mutable Value: ${mutableValue}`;
  console.log(templateString);

  if (globalValue) console.log('Global Value is true');
  else console.log('Global Value is false');

  try {
    throw new Error('This is an error');
  } catch (error) {
    console.error(error.message);
  }

  (async () => {
    const module = await import('./someModule.js');
    console.log(module);
  })();
}
showcase();
