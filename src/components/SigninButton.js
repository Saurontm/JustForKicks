import { UserButtonStyled } from "../styles";
import { useState } from "react";
import SignUpModal from "./modals/SignUpModal";
import { FaUserAlt } from "react-icons/fa";

const SigninButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <UserButtonStyled onClick={openModal}>
        <FaUserAlt />
      </UserButtonStyled>
      <SignUpModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SigninButton;
