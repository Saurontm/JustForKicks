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
    this.products.push({
      ...newSneaker,
      id: this.products.length + 1,
      slug: slugify(newSneaker.name),
    });
  };

  sneakerUpdate = (updatedSneaker) => {
    this.products[
      this.products.findIndex((sneaker) => sneaker.id === updatedSneaker.id)
    ] = {
      ...updatedSneaker,
      slug: slugify(updatedSneaker.name),
    };
  };
}

const productStore = new ProductStore();
export default productStore;
