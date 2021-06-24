import products from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";

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

  sneakerAdd = (newSneaker) => {
    newSneaker.id = this.products.length + 1;
    newSneaker.slug = slugify(newSneaker.name);
    this.products.push(newSneaker);
  };
}

const productStore = new ProductStore();
export default productStore;
