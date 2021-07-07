import { makeAutoObservable } from "mobx";
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

  sneakerAdd = async (newSneaker) => {
    try {
      const formData = new FormData();
      for (const key in newSneaker) formData.append(key, newSneaker[key]);

      const response = await axios.post(
        "http://localhost:8000/products",
        formData
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  sneakerUpdate = async (updatedSneaker) => {
    try {
      const formData = new FormData();
      for (const key in updatedSneaker)
        formData.append(key, updatedSneaker[key]);
      const response = await axios.put(
        `http://localhost:8000/products/${updatedSneaker.id}`,
        formData
      );

      // const sneaker = this.products.find(
      //   (sneaker) => sneaker.id === response.data.id
      // );

      this.products[
        this.products.findIndex((sneaker) => sneaker.id === response.data.id)
      ] = {
        ...response.data,
      };
    } catch (error) {
      console.error(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchSneakers();
export default productStore;
