// Explicito
let idUser: any;
idUser = 1;
idUser = "";
idUser = true;
idUser = { hello: "World" };
console.log("idUser", idUser);

//Implicito
let otherId;
otherId = {};
otherId = "hola";
otherId = 1;
console.log("otherId", otherId);

let surprise: any = "Hello typescript";
// surprise.sayHello(); // Error
const res = surprise.substring(6); // Error
console.log("res", res);
