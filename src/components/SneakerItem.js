import { ProductWrapper } from "../styles";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const SneakerItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${props.sneaker.slug}`}>
        <img alt={props.sneaker.name} src={props.sneaker.imageURL} />
        <p>{props.sneaker.name}</p>
        <p className="product-price">{props.sneaker.price} KD</p>
      </Link>
      <UpdateButton sneaker={props.sneaker}></UpdateButton>
      <DeleteButton
        productDelete={props.productDelete}
        sneakerID={props.sneaker.id}
      ></DeleteButton>
    </ProductWrapper>
  );
};

export default observer(SneakerItem);
