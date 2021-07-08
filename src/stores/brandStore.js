import { makeAutoObservable } from "mobx";
import axios from "axios";

class BrandStore {
  brands = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBrands = async () => {
    try {
      const response = await axios.get("http://localhost:8000/brands");
      // here
      this.brands = response.data;
      this.loading = false;
    } catch (error) {
      console.error("fetchBrands: ", error);
    }
  };

  brandCreate = async (newBrand) => {
    try {
      const formData = new FormData();
      for (const key in newBrand) formData.append(key, newBrand[key]);

      const response = await axios.post(
        "http://localhost:8000/brands",
        formData
      );
      response.data.products = [];
      this.brands.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const brandStore = new BrandStore();
brandStore.fetchBrands();

export default brandStore;
