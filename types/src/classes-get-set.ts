export {};

enum Orientation {
  landscape,
  panorama,
  square,
  portrait,
}

// Get y Set

class Picture {
  // Propiedades
  private _id: number;
  private _title: string;
  private _orientation: Orientation;

  public constructor(id: number, title: string, orientation: Orientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }

  get id() {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  get orientation() {
    return this._orientation;
  }
  set orientation(value: Orientation) {
    this._orientation = value;
  }

  // Comportamiento
  public toString() {
    return `[id: ${this._id},
    title: ${this._title},
    orientation: ${this._orientation}]`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this._pictures = [];
  }

  get id() {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

//instanciar album
const album: Album = new Album(1, "Personal Pictures");
//instanciar picture
const picture: Picture = new Picture(1, "Session", Orientation.panorama);

album.addPicture(picture);
console.log(album);

// Acceciendo a los miembros privados
picture.id = 100;
picture.title = "Another picture";
album.title = "Personal Activities";
console.log(album);
