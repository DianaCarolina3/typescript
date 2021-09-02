// Void

// Tipo explicito
function showInfo(user: any): any {
  console.log("User info", user.id, user.username, user.firstName);
  // return "hola";
}
showInfo({ id: 1, username: "dianita", firstName: "diana" });

// Tipo Implicito
function showFormatted(user: any) {
  console.log(
    "User info",
    `Id: ${user.id},
    Username: ${user.username},
    Firstname: ${user.firstName}`
  );
}
showFormatted({ id: 1, username: "dianita", firstName: "diana" });

// Void como dato en variable
let unusable: void;
// unusable = null;
// unusable = undefined;

// Tipo never

//En este caso lanza un error y nunca retorna un valor
function handleError(code: number, message: string): never {
  // Process your code here
  // Generate message
  throw new Error(`${message}. Code ${code}`);
}
try {
  handleError(404, "No found");
} catch (err) {}

// ciclo infinito
function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}
sumNumbers(5);
