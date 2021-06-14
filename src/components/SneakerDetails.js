import { DetailWrapper } from "../styles";

const SneakerDetail = (props) => {
  return (
    <DetailWrapper>
      <img src={props.sneaker.imageURL} alt={props.sneaker.name} />
      <h4>{props.sneaker.name}</h4>
      <p>{props.sneaker.description}</p>
      <p>{props.sneaker.price} KD</p>
    </DetailWrapper>
  );
};

export default SneakerDetail;
