import { UserButtonStyled } from "../styles";
import { FaSignOutAlt } from "react-icons/fa";
import authStore from "../stores/authStore";

const SignoutButton = (props) => {
  return (
    <div>
      <UserButtonStyled onClick={authStore.signout}>
        <FaSignOutAlt />
      </UserButtonStyled>
    </div>
  );
};

export default SignoutButton;
