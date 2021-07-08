import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchSneakers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
      this.loading = false;
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

  sneakerAdd = async (newSneaker, brand) => {
    try {
      const formData = new FormData();
      for (const key in newSneaker) formData.append(key, newSneaker[key]);
      console.log(brand.id);
      const response = await axios.post(
        `http://localhost:8000/brands/${brand.id}/products`,
        formData
      );
      this.products.push(response.data);
      brand.products.push({ id: response.data.id });
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

      this.products[
        this.products.findIndex((sneaker) => sneaker.id === response.data.id)
      ] = {
        ...response.data,
      };
    } catch (error) {
      console.error(error);
    }
  };

  getProductById = (productID) =>
    this.products.find((product) => product.id === productID);
}

const productStore = new ProductStore();
productStore.fetchSneakers();
export default productStore;
