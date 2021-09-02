// import { Album, PhotoOrientation, Picture, User } from "./photo-app";
import { Album } from "./album";
import { User } from "./user";
import { PhotoOrientation } from "./photo-orientation";
import { Picture } from "./picture";

const user = new User(1, "DianaCarolina", "Diana", true);
const album = new Album(10, "Platzi pictures");
const picture = new Picture(
  1,
  "TypeScript Course",
  "2020-03-10",
  PhotoOrientation.Portrait
);

//Crear relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log(user);

//remover album
user.removeAlbum(album);

console.log(user);
