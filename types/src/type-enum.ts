// Orientacion para fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

// ENUM: conjunto de constantes con nombre

enum PhotoOrientation {
  Lansdcase, //0
  Portrait, //1
  Square, //2
  Panorama, //3
}

const landscape: PhotoOrientation = PhotoOrientation.Lansdcase;

//acceder a posicion del elemento
console.log("landscape", landscape);
//acceder al valor del elemento
console.log("Landscape", PhotoOrientation[0]);

enum PictureOrientation {
  Lansdcase = 10, //10
  Portrait, //
  Square, //
  Panorama, //
}

console.log("Portrait", PictureOrientation.Portrait);
console.log("Portrait", PictureOrientation[11]);

enum Country {
  Bolivia = "bol",
  Colombia = "Col",
  Mexico = "Mex",
  EEUU = "USA",
  Espana = "Esp",
}

const country: Country = Country.Colombia;
console.log("Country", country);

enum Weekdays {
  monday = "Mon",
  tuesday = "Tue",
  wednesday = "Wed",
  thursday = "Thu",
  friday = "Fri",
  saturday = "Sat",
  sunday = "Sun",
}

console.log(`cumpleaños: ${Weekdays.saturday} 6 december`);
