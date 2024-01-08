const nums = [1, 2, 3, 4, 5, 6];

const number = 3.1234563445;

const text = 'Hello World';

const user = { name: 'Bob', age: 22 };

function greet(user) {
  const { name, age } = user;
  return `Hello ${name}, you are ${age} years old`;
}

console.log('user:', greet(user));

const result = nums.map((n) => n * 2).filter((n) => !(n % 4));

const result1 = nums.filter((n) => !(n % 4));

const result2 = nums.reduce((a, n) => a * n);

console.log('result:', result);

console.log('result1:', result1);

console.log('result2:', result2);

console.log('result 3:', number.toFixed(2));

console.log('text:', text.split(' '));
