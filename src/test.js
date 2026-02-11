// let a_1 = [1,2,3,4];

// console.log(...a_1);

// let a ,b, c;

// [a,b,c] = a_1;

// console.log(a, b, c);

// const dhaval = {
//     name: "Dhaval",
//     age: 22,
//     city: "Surat"
// };

// console.log(dhaval);

// let {name} = dhaval;

// console.log(name);

// 1) Basic extraction
const person = { name: 'Alice', age: 30 };
const { name, age } = person; // name = 'Alice', age = 30

// 2) Rename and default value
const { name: firstName, email = 'no-email' } = person; // firstName = 'Alice', email = 'no-email'

// 3) Nested destructuring
const data = { id: 1, profile: { city: 'NYC', zip: 10001 } };
const { profile: { city, zip } } = data; // city = 'NYC', zip = 10001

// 4) Rest properties
const { name: n, ...rest } = { name: 'Bob', age: 25, role: 'dev' };
// n = 'Bob', rest = { age: 25, role: 'dev' }