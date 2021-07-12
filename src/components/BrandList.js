import { ListWrapper, BsPlusCircleStyled } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react-lite";
import brandStore from "../stores/brandStore";
import BrandItem from "./BrandItem";
import BrandModal from "./modals/BrandModal";
import authStore from "../stores/authStore";

const BrandList = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const brandList = brandStore.brands
    .filter((brand) => brand.name.toLowerCase().includes(query.toLowerCase()))
    .map((brand) => <BrandItem brand={brand} />);
  return (
    <div>
      <Helmet>
        <title>JFKicks - Available Brands</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <SearchBar setQuery={setQuery} />
      {authStore.user && (
        <BsPlusCircleStyled size="1.7em" onClick={openModal} />
      )}
      <BrandModal isOpen={isOpen} closeModal={closeModal}></BrandModal>
      <ListWrapper>{brandList}</ListWrapper>
    </div>
  );
};

export default observer(BrandList);
