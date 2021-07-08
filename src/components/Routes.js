import { Route } from "react-router";
import { Switch } from "react-router";
import HomePage from "./Home";
import SneakerDetail from "./SneakerDetails";
import SneakersList from "./SneakerList";
import BrandList from "./BrandList";
import BrandDetails from "./BrandDetails";
import productStore from "../stores/productStore";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/products/:productSlug">
        <SneakerDetail></SneakerDetail>
      </Route>
      <Route path="/brands/:brandSlug">
        <BrandDetails />
      </Route>
      <Route path="/products">
        <SneakersList sneakers={productStore.products} />
      </Route>
      <Route path="/brands">
        <BrandList />
      </Route>
    </Switch>
  );
};

export default Routes;
