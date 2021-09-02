export {};

enum Orientation {
  landscape,
  panorama,
  square,
  portrait,
}

// Superclase

// abstract no permite instanciar la clase y proveer objetos
abstract class Item {
  // protected da acceso a la herencia a las subclases
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }
  // set id(value: number) {
  //   this._id = value;
  // }

  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
}

// Get y Set

class Picture extends Item {
  // permite acceder a atributos sin necesidad de instanciar
  public static photoOrientation = Orientation;
  // Propiedades
  private _orientation: Orientation;

  public constructor(id: number, title: string, orientation: Orientation) {
    super(id, title);
    this._orientation = orientation;
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

class Album extends Item {
  private _pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
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
// picture.id = 100;
picture.title = "Another picture";
album.title = "Personal Activities";
console.log(album);

// const item = new Item(1, "test title");
// console.log(item);

console.log("PhotoOrientation", Picture.photoOrientation.landscape);
