import { ProductWrapper } from "../styles";
import DeleteButton from "./DeleteButton";

const SneakerItem = (props) => {
  return (
    <ProductWrapper>
      <img
        onClick={() => props.setSneaker(props.sneaker)}
        alt={props.sneaker.name}
        src={props.sneaker.imageURL}
      />
      <p onClick={() => props.setSneaker(props.sneaker)}>
        {props.sneaker.name}
      </p>
      <p className="product-price">{props.sneaker.price} KD</p>
      <DeleteButton
        setSneaker={props.setSneaker}
        productDelete={props.productDelete}
        sneakerID={props.sneaker.id}
      ></DeleteButton>
    </ProductWrapper>
  );
};

export default SneakerItem;
