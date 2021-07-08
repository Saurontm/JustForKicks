import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const BrandItem = (props) => {
  return (
    <ProductWrapper>
      <Link to={`/brands/${props.brand.slug}`}>
        <img alt={props.brand.name} src={props.brand.image} />
        <p>{props.brand.name}</p>
      </Link>
    </ProductWrapper>
  );
};

export default observer(BrandItem);
