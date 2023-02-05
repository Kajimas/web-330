export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  count() {
    return this.products.length;
  }

  add(product) {
    this.products.push(product);
  }

  *[Symbol.iterator]() {
    for (let product of this.products) {
      yield product;
    }
  }
}
