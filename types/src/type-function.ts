//Crear fotografia
// function createPicture(title, data, size) {
// title
// }

export {};

type SquareSize = "100*100" | "500*500" | "1000*1000";

// Usar TS, definir tipos para parametros
function createPicture(title?: string, date?: string, size?: SquareSize) {
  // se crea fotografia
  console.log("create picture", title, date, size);
}

createPicture("My birthday", "06/12/2003", "500*500");
createPicture("Colombia Trip", "06/02/2012");
createPicture("Son");
createPicture();

// Flat Array Function
let createPic = (title: string, date: Date, size: SquareSize): object => {
  return {
    title,
    date,
    size,
  };
};

const picture = createPic("Platzi session", new Date(6 - 12 - 2020), "100*100");
console.log(picture);

// Tipo retorno TS

function handleError(code: number, message: string): never | string {
  // Logica
  if (message === "error") {
    throw new Error("Error" + message + "Code:" + code);
  } else {
    return "An error has occurred";
  }
}

try {
  let result = handleError(200, "OK"); // string
  console.log(result);
  result = handleError(404, "error"); // never
  console.log(result);
} catch (err) {}
