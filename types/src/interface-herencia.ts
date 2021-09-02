export {};

enum Orientation {
  landscape,
  panorama,
  square,
  portrait,
}

interface entity {
  id: number | string;
  title: string;
}

// copia de atributos de entity
interface Album extends entity {
  description: string;
}

interface Picture extends entity {
  orientation: Orientation;
}

const album: Album = {
  id: 425,
  title: "travel",
  description: "Photos of travels",
};
console.log(album);

const picture: Picture = {
  id: 600,
  title: "family",
  orientation: Orientation.landscape,
};
console.log(picture);

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = "Moon";

console.log(newPicture);
