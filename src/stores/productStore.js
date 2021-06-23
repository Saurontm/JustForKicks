import products from "../products";
import { makeAutoObservable } from "mobx";

class ProductStore {
  products = products;

  constructor() {
    makeAutoObservable(this);
  }

  sneakerDelete = (sneakerId) => {
    const updatedSneakers = this.products.filter(
      (sneaker) => sneaker.id !== sneakerId
    );
    this.products = updatedSneakers;
  };
}

const productStore = new ProductStore();
export default productStore;
