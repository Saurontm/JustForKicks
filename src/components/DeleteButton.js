import { DeleteButtonStyled } from "../styles";
import { BsTrashFill } from "react-icons/bs";
import productStore from "../stores/productStore";

const DeleteButton = (props) => {
  const handleDelete = () => {
    productStore.sneakerDelete(props.sneakerID);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      <BsTrashFill />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
