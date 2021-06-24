import Modal from "react-modal";
import { useState } from "react";
import productStore from "../../stores/productStore";
import { AddButton } from "../../styles";

const SneakerModal = (props) => {
  const [sneaker, setSneaker] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setSneaker({ ...sneaker, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.sneakerAdd(sneaker);
    props.closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Sneaker Modal"
      >
        <h1>Add new sneaker</h1>
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
            <div className="col-6">
              <label>Price</label>
              <input
                className="form-control"
                type="number"
                min="1"
                onChange={handleChange}
                name="price"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="description"
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="imageURL"
              required
            />
          </div>
          <AddButton>Add sneaker</AddButton>
        </form>
      </Modal>
    </div>
  );
};

export default SneakerModal;
