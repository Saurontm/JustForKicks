import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchSneakers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("fetchSneakers", error);
    }
  };

  sneakerDelete = async (sneakerId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${sneakerId}`);
      const updatedSneakers = this.products.filter(
        (sneaker) => sneaker.id !== sneakerId
      );
      this.products = updatedSneakers;
    } catch (error) {
      console.error(error);
    }
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
productStore.fetchSneakers();
export default productStore;
