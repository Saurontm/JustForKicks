import Modal from "react-modal";
import { useState } from "react";
import productStore from "../../stores/productStore";
import { AddButton, IoMdCloseStyled } from "../../styles";

const SneakerModal = (props) => {
  const [sneaker, setSneaker] = useState(
    props.oldSneaker ?? { name: "", price: 0, description: "", image: "" }
  );

  const handleChange = (event) => {
    setSneaker({ ...sneaker, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.oldSneaker
      ? productStore.sneakerUpdate(sneaker)
      : productStore.sneakerAdd(sneaker);
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
                value={sneaker.name}
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
                value={sneaker.price}
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
              value={sneaker.description}
              required
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
              value={sneaker.image}
              required
            />
          </div>
          <AddButton>{props.oldSneaker ? "Update" : "Add"}</AddButton>
        </form>
      </Modal>
    </div>
  );
};

export default SneakerModal;
