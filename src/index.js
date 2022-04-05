// import { Map } from "immutable";
// // const Map = require("immutable");
// // const { Map } = require("immutable");

// let book = Map({ title: "Harry Potter" });

// // function publish(book) {
// //   book.isPublished = true;
// // }

// // publish(book);

// console.log(book);

// import { Map } from "immutable";

// let book = Map({ title: "Harry Potter" });

// function publish(book) {
//   return book.set("isPublished", true);
// }

// book = publish(book);

// console.log(book.toJS());

import { Map } from "immutable";

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());
