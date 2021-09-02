enum TypeProduct {
  sweet = 1,
  salty,
  meats,
  seaFood,
  parva,
  drinks,
}

enum FactoryProducts {
  cocacola = "cocacola",
  postobon = "postobon",
  gomiTodo = "gomiTodo",
  oceania = "oceania",
  parvaRica = "parvaRica",
  canitodo = "canitodo",
  mixDeTodito = "mixDeTodito",
}

abstract class Item {
  protected readonly _id: number;

  constructor(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}

// New Products
class Product extends Item {
  private _name: string;
  private _category: TypeProduct;

  public constructor(id: number, name: string, category: TypeProduct) {
    super(id);
    this._name = name.toLowerCase();
    this._category = category;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get category(): TypeProduct {
    return this._category;
  }
  set category(value: TypeProduct) {
    this._category = value;
  }

  public product() {
    return `[id: ${this._id}, name: ${this._name}, category: ${this._category}]`;
  }
}

// Catalogue
class Catalogue extends Item {
  private _factory: FactoryProducts;
  private _products: Product[];

  constructor(id: number, factory: FactoryProducts) {
    super(id);
    this._factory = factory;
    this._products = [];
  }

  get factory(): FactoryProducts {
    return this._factory;
  }
  set factory(value: FactoryProducts) {
    this._factory = value;
  }

  addProducts(product: Product) {
    this._products.push(product);
  }
}

const oneProduct = new Product(1, "Gomitas", TypeProduct.sweet);
const twoProduct = new Product(2, "Bombones", TypeProduct.sweet);
const threeProduct = new Product(3, "Paletas", TypeProduct.parva);
const fourProduct = new Product(4, "pescado", TypeProduct.seaFood);
const fiveProduct = new Product(5, "Trufas", TypeProduct.seaFood);

oneProduct.name = "boggy";

const oneCatalogue = new Catalogue(1, FactoryProducts.oceania);
oneCatalogue.addProducts(oneProduct);
oneCatalogue.addProducts(twoProduct);
oneCatalogue.addProducts(threeProduct);
oneCatalogue.factory = FactoryProducts.gomiTodo;

console.log(oneCatalogue);

const twoCatalogue = new Catalogue(2, FactoryProducts.oceania);
twoCatalogue.addProducts(fourProduct);
twoCatalogue.addProducts(fiveProduct);

console.log(twoCatalogue);
