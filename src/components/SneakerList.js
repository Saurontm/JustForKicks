import SneakerItem from "./SneakerItem";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";

const SneakersList = (props) => {
  const [query, setQuery] = useState("");

  const sneakersList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <SneakerItem
        sneaker={product}
        setSneaker={props.setSneaker}
        sneakerID={product.id}
        productDelete={props.productDelete}
      />
    ));
  return (
    <div>
      <Helmet>
        <title>JFKicks- available sneakers</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{sneakersList}</ListWrapper>
    </div>
  );
};

export default SneakersList;
