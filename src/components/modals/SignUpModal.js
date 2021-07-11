import Modal from "react-modal";
import { useState } from "react";
import userStore from "../../stores/authStore";
import { AddButton, IoMdCloseStyled } from "../../styles";

const SneakerModal = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    userStore.signup(user);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="SignUp Modal"
      >
        <IoMdCloseStyled size="1.7em" onClick={props.closeModal} />
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="username"
                value={user.username}
                required
              />
            </div>
            <div className="col-6">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                name="password"
                value={user.password}
                required
              />
            </div>
          </div>

          <AddButton>sign up</AddButton>
        </form>
      </Modal>
    </div>
  );
};

export default SneakerModal;
