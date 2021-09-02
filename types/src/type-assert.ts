// <> // Angle Bracket syntax

let username: any;
username = "Diana";

// cadena, ¡TS confia en mi!
let message: string =
  (<string>username).length >= 5
    ? `Welcome ${username}`
    : `Username is too short`;

console.log("Message", message);

let usernameWhitId: any = "Diana 20";
// ¿Como obtener el username?
username = (<string>usernameWhitId).substring(0, 4);
console.log("username", username);

// Sintaxis 'as'

message =
  (username as string).length >= 5
    ? `Welcome ${username}`
    : `Username is too short`;

console.log("Message", message);

let helloUser: any;
helloUser = "Hello Diana";
username = (helloUser as string).substring(6);
console.log("username", username);
