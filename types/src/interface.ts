export {};

enum Orientation {
  landscape,
  panorama,
  square,
  portrait,
}

interface Picture {
  title: string;
  date: Date;
  orientation: Orientation;
}

function showPicture(picture: Picture) {
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`
  );
}

let myPic = {
  title: "Test title",
  date: new Date(),
  orientation: Orientation.panorama,
};

showPicture(myPic);
showPicture({
  title: "Diana",
  date: new Date(),
  orientation: Orientation.square,
  // extra: "test",// Error
});

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: Orientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: "Default", date: "0000" };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }
  return pic;
}

let pictu = generatePicture({});
console.log(pictu);
pictu = generatePicture({ title: "travel pic" });
console.log(pictu);
pictu = generatePicture({ title: "Love pic", date: "2021" });
console.log(pictu);

// Interfaz: Usuario
interface User {
  // solo,lectura, no se puede cambia
  readonly id: number | string;
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 502, username: "Diana", isPro: false };
console.log(user);
user.username = "paparazzi";
// user.id = 402; // Error
console.log(user);
