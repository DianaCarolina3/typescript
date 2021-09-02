export {};

enum Orientation {
  landscape,
  panorama,
  square,
  portrait,
}

class Picture {
  // Propiedades
  private id: number;
  private title: string;
  private orientation: Orientation;

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
  private id: number;
  private title: string;
  private pictures: Picture[];

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
// picture.id = 100; // Private
// picture.title = "Another title"; // Private
// album.title = "Personal Activities"; // Private
// console.log(album);
