export {};

// 10, '10'
let idUser: number | string;
idUser = 10;
idUser = "10";

// Buscar username dado un ID
function getUsernameById(id: number | string) {
  // Logica de negocio
  return "Diana";
}

getUsernameById(20);
getUsernameById("20");

// Alias de Tipos para TS

type IdU = number | string;
type Username = string;
// 10, '10'
let idU: IdU;
idU = 10;
idU = "10";

// Buscar username dado un ID
function getUserById(id: IdU): Username {
  // Logica de negocio
  return "Diana";
}

getUserById(20);
getUserById("20");

// Tipos literales

// 100*100
// 500*500
// 1000*1000
type SquareSize = "100*100" | "500*500" | "1000*1000";
// let smallPicture: SquareSize = "200*200"; // Error
let smallPicture: SquareSize = "100*100";
let largePicture: SquareSize = "1000*1000";
let mediumPicture: SquareSize = "500*500";
console.log(smallPicture, largePicture, mediumPicture);
