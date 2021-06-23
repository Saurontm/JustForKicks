import SneakerItem from "./SneakerItem";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import productStore from "../stores/productStore";
import { observer } from "mobx-react-lite";

const SneakersList = () => {
  const [query, setQuery] = useState("");
  const sneakersList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => <SneakerItem sneaker={product} sneakerID={product.id} />);
  return (
    <div>
      <Helmet>
        <title>JFKicks - Available sneakers</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{sneakersList}</ListWrapper>
    </div>
  );
};

export default observer(SneakersList);
