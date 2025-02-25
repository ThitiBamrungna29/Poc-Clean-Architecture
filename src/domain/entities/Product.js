export class Product {
  constructor(id, name, price, stock = 0, test = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.test = test;
  }
}
