import SneakerItem from "./SneakerItem";
import { ListWrapper, BsPlusCircleStyled } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react-lite";
import SneakerModal from "./modals/SneakerModal";
import authStore from "../stores/authStore";

const SneakersList = ({ sneakers, brand }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const sneakersList = sneakers
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
      {authStore.user && (
        <BsPlusCircleStyled size="1.7em" onClick={openModal} />
      )}

      <SneakerModal
        isOpen={isOpen}
        closeModal={closeModal}
        brand={brand}
      ></SneakerModal>
      <ListWrapper>{sneakersList}</ListWrapper>
    </div>
  );
};

export default observer(SneakersList);
