import { useState } from "react";

const InputCard = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const enterTitle = (e) => {
    setTitle(e.target.value);
  };

  const enterPrice = (e) => {
    setPrice(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const addData = {
      title,
      price,
    };
    props.addItem(addData);
    setTitle("");
    setPrice("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              value={title}
              onChange={enterTitle}
              className="form-control"
              placeholder="Title"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Price</label>
            <input
              type="number"
              min="0"
              value={price}
              onChange={enterPrice}
              className="form-control"
              placeholder="Price"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputCard;
