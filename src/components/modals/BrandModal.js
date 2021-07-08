import Modal from "react-modal";
import { useState } from "react";
import brandStore from "../../stores/brandStore";
import { AddButton, IoMdCloseStyled } from "../../styles";

const BrandModal = (props) => {
  const [brand, setBrand] = useState({ name: "", image: "" });

  const handleChange = (event) => {
    setBrand({ ...brand, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setBrand({ ...brand, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    brandStore.brandCreate(brand, props.brand);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Sneaker Modal"
      >
        <IoMdCloseStyled size="1.7em" onClick={props.closeModal} />
        <h1>Add new brand</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
              name="image"
              required
            />
          </div>
          <AddButton>{"Add"}</AddButton>
        </form>
      </Modal>
    </div>
  );
};

export default BrandModal;
