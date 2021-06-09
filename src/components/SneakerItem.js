import { ProductWrapper } from "../styles";

const SneakerItem = (props) => {
  return (
    <ProductWrapper>
      <img alt={props.sneaker.name} src={props.sneaker.imageURL} />
      <p>{props.sneaker.name}</p>
      <p className="product-price">{props.sneaker.price} KD</p>
    </ProductWrapper>
  );
};

export default SneakerItem;
