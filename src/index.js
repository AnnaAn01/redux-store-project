function sayHello() {
  return "Hello World!";
}

function greet(fnMesage) {
  console.log(fnMesage());
}

greet(sayHello);
