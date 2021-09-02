export {};

enum Orientation {
  landscape,
  panorama,
  square,
  portrait,
}

class Picture {
  // Propiedades
  public id: number;
  public title: string;
  public orientation: Orientation;

  public constructor(id: number, title: string, orientation: Orientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this.id},
    title: ${this.title},
    orientation: ${this.orientation}]`;
  }
}

class Album {
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

//instanciar album
const album: Album = new Album(1, "Personal Pictures");
//instanciar picture
const picture: Picture = new Picture(1, "Session", Orientation.panorama);

album.addPicture(picture);
console.log(album);

// Accediendo a los miembros publicos de nuestra clase
picture.id = 100; // Public
picture.title = "Another title"; // Public
album.title = "Personal Activities";
console.log(album);
