import products from "../products";
import SneakerItem from "./SneakerItem";
import { ListWrapper } from "../styles";

const SneakersList = () => {
  const sneakersList = products.map((product) => (
    <SneakerItem sneaker={product} />
  ));
  return <ListWrapper> {sneakersList}</ListWrapper>;
};

export default SneakersList;
