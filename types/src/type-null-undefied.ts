// Tipo null

let nullVariable: null;
nullVariable = null;
// nullVariable = 5; // Error

let otherVariable = null;
otherVariable = "hola";

console.log("null", nullVariable);
console.log("other", otherVariable);

//Undefined

let undefinedvariable: undefined = undefined;
// undefinedvariable = 5; //Error

let otherUndefinedvariable = undefined;
otherUndefinedvariable = 45;

console.log(undefinedvariable);
console.log(otherUndefinedvariable);

// Null y undefined como subtipo

//--strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;
