console.log("¡Hola Diana!");

/* Number */

// Explicito
let phone: number;
phone = 1;
phone = 54234567;
// phone = "hola"; // Error

// Implicito
let phoneNumber = 54244567;
phoneNumber = 123;
// phoneNumber = false; // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

/* Boolean */

// Explicito
let isPro: boolean;
isPro = true;
// isPro = 1; // Error

// Implicito
let isUserPro = false;
isUserPro = true;
// isUserPro = 45; // Error

/* String */

let userName: string = "Maria";
userName = "Luis";
// userName = false; // Error

// Template string
// Uso de bacl-tick ``
let userInfo: string;
userInfo = `
    User Info:
    Username: ${userName}
    firstName: ${userName + " Aviles"}
    phone: ${phone}
    isPro: ${isUserPro}
`;
console.log(userInfo);
