// ARRAY []
console.log("ARRAY");

// Tipo explicito
let users: string[];
users = ["luxaviles", "paparazzi", "lensqueen"];
// users = [1, true, "test"]; // Error

// Tipo Implicito
let other = ["luxaviles", "paparazzi", "lensqueen"];
// other = [1, true, "test"]; // Error

// Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ["Favorite Sunset", "Vaccion time", "Lansdcase"];

// get values array
console.log("first user", users[0]);
console.log("first title", pictureTitles[0]);

// Propiedades en array
console.log("length", users.length);
console.log(users);

// Funciones en array
users.push("Diana");
//ordenar array por alfabeto
users.sort();
console.log(users);

export {};

// TUPLE
console.log("TUPLE");
//  [1, 'user']
let user: [number, string];
user = [1, "Diana"];

console.log("user", user);
console.log("username", user[1]);
console.log("username", user[1].length);
console.log("id", user[0]);

// tupla con varios valores
let userInfo: [number, string, boolean];
userInfo = [2, "paparazzi", true];
console.log("userInfo", userInfo);
console.log("boolean", userInfo[2]);

// Arreglo de tuplas: elementos tipados
let array: [number, string][] = [];
array.push([1, "Diana"]);
array.push([2, "Luis"]);
array.push([3, "Jose"]);
console.log("array", array);

// Uso de funciones
// Jose to jose001
array[2][1] = array[2][1].concat("001");

console.log("array", array);
