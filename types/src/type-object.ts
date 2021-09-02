// type Object
// Objetc vs object(clase JS vs tipo TS)

// tipo 'object'
let user: object;
user = {};

user = {
  id: 1,
  username: "Dianita",
  firstName: "Diana",
  isPro: true,
};
console.log(user);
// console.log(user.username); // Error

// clase 'Object'
const myObj = {
  id: 1,
  username: "Dianita",
  firstName: "Diana",
  isPro: true,
};

const isInstance = myObj instanceof Object;
console.log("isInstance", isInstance);
console.log("myObj.username:", myObj.username);
