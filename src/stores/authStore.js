import { makeAutoObservable } from "mobx";
import axios from "axios";
import decode from "jwt-decode";

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      const res = await axios.post("http://localhost:8000/signup", newUser);
      this.user = decode(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signin = async (newData) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", newData);
      this.user = decode(res.data.token);
      console.log(decode(res.data.token));
    } catch (error) {
      console.error(error);
    }
  };
}

const userStore = new UserStore();
export default userStore;
