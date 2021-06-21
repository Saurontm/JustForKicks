import { ProductWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const SneakerItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${props.sneaker.slug}`}>
        <img alt={props.sneaker.name} src={props.sneaker.imageURL} />
        <p>{props.sneaker.name}</p>
        <p className="product-price">{props.sneaker.price} KD</p>
        <DeleteButton
          productDelete={props.productDelete}
          sneakerID={props.sneaker.id}
        ></DeleteButton>
      </Link>
    </ProductWrapper>
  );
};

export default SneakerItem;
