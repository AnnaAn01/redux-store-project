// import { compose, pipe } from "lodash/fp";

// let input = "   Javascript   ";
// let output = "<div>" + input.trim() + "</div>";

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap("span"));
// console.log(transform(input));

// const person = {
//   name: "John",
//   address: {
//     country: "USA",
//     city: "LA",
//   },
// };

// // const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// // console.log(updated);
// // // shallow copy
// // const updated = { ...person, name: "Bob" };
// // updated.adress.city = "New York";

// // deep copy
// const updated = {
//   ...person,
//   address: {
//     ...person.address,
//     city: "New York",
//   },
//   name: "Bob",
// };

// console.log(person);

const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);

// Removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated);
