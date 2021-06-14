import { DetailWrapper, BackButton } from "../styles";
import DeleteButton from "./DeleteButton";
const SneakerDetail = (props) => {
  return (
    <DetailWrapper>
      <BackButton onClick={() => props.setSneaker(null)}>back</BackButton>
      <img src={props.sneaker.imageURL} alt={props.sneaker.name} />
      <h4>{props.sneaker.name}</h4>
      <p>{props.sneaker.description}</p>
      <p>{props.sneaker.price} KD</p>
      <DeleteButton
        setSneaker={props.setSneaker}
        productDelete={props.productDelete}
        sneakerID={props.sneaker.id}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default SneakerDetail;
