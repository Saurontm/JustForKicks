import { DeleteButtonStyled } from "../styles";
import { BsTrashFill } from "react-icons/bs";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.productDelete(props.sneakerID);
    props.history.goBack();
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      <BsTrashFill />
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
