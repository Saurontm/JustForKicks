// import Modal from "react-modal";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import userStore from "../../stores/authStore";
import {
  AddButton,
  HideButtonStyled,
  StyledInput,
  SignupTitle,
  SignButton,
} from "../../styles";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import PasswordStrengthBar from "react-password-strength-bar";

const SneakerModal = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [hiddenPassword, setHidden] = useState(true);
  const [signin, setSignin] = useState(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setHidden(!hiddenPassword);
  };

  const toggleSignIn = () => {
    setSignin(!signin);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signin ? userStore.signin(user) : userStore.signup(user);

    props.closeModal();
  };
  return (
    <div>
      <Modal
        show={props.isOpen}
        onHide={props.closeModal}
        contentLabel="SignUp Modal"
        centered
      >
        <Modal.Header closeButton>
          <SignupTitle className="small">
            {signin
              ? "Welcome back, sign into your account"
              : "Sign up and join the fun!"}
          </SignupTitle>
        </Modal.Header>

        <form onSubmit={handleSubmit}>
          <div
            className="form-group col"
            // style={{ paddingRight: 400, paddingLeft: 400 }}
          >
            <div
              className="col-md-offset-3"
              style={{
                marginTop: 20,
              }}
            >
              <label>Username</label>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid grey",
                  borderRadius: 5,
                }}
              >
                <StyledInput
                  className="form-control"
                  type="text"
                  onChange={handleChange}
                  name="username"
                  value={user.username}
                  required
                />
              </div>
            </div>

            <div
              className="col-md-offset-3"
              style={{
                marginTop: 20,
              }}
            >
              <label>Password</label>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid grey",
                  borderRadius: 5,
                }}
              >
                <StyledInput
                  className="form-control"
                  type={hiddenPassword ? "password" : "text"}
                  onChange={handleChange}
                  name="password"
                  value={user.password}
                  required
                ></StyledInput>
                <HideButtonStyled
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  {hiddenPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </HideButtonStyled>
              </div>
              {!signin && <PasswordStrengthBar password={user.password} />}
            </div>
            <AddButton
              className="signup"
              style={{ marginBottom: 20, float: "right" }}
            >
              {signin ? "Sign in" : "Sign up"}
            </AddButton>
          </div>
        </form>
        <p style={{ textAlign: "center" }}>
          {signin ? "Dont have an account?" : "Already have an account?"}
          <SignButton onClick={toggleSignIn}>
            {" "}
            {signin ? "Sign up" : "Sign in"}
          </SignButton>
        </p>
      </Modal>
    </div>
  );
};

export default SneakerModal;
