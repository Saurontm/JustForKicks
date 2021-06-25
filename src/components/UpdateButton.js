import { UpdateButtonStyled } from "../styles";
import { useState } from "react";
import SneakerModal from "./modals/SneakerModal";
import { FiEdit } from "react-icons/fi";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>
        <FiEdit />
      </UpdateButtonStyled>
      <SneakerModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldSneaker={props.sneaker}
      />
    </div>
  );
};

export default UpdateButton;
