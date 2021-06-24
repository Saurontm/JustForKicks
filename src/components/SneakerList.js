import SneakerItem from "./SneakerItem";
import { ListWrapper, BsPlusCircleStyled } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import productStore from "../stores/productStore";
import { observer } from "mobx-react-lite";
import SneakerModal from "./modals/SneakerModal";

const SneakersList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
      <BsPlusCircleStyled size="1.7em" onClick={openModal} />
      <SneakerModal isOpen={isOpen} closeModal={closeModal}></SneakerModal>
      <ListWrapper>{sneakersList}</ListWrapper>
    </div>
  );
};

export default observer(SneakersList);
