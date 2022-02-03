import { useState } from "react/cjs/react.development";
import "./Lists.css";

const Lists = (props) => {
  const delHandler = () => {
    let id = props.item.id;
    props.delItem(id);
  };

  const reduceHandler = () => {
    props.reduceQty(props.item.id);
  };

  const addHandler = () => {
    props.addQty(props.item);
  };

  const inputHandler = () => {
    console.log("hello");
  };

  return (
    <div className="card shadow-sm mb-2">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4>{props.item.title}</h4>
          <h5>{props.item.price} Ks</h5>
        </div>

        <div className="d-flex justify-content-between align-items-end">
          <div className="d-flex justify-content-between align-items-center">
            <button
              onClick={reduceHandler}
              className="btn btn-sm btn-outline-secondary btn-qty"
            >
              <i className="fas fa-minus" />
            </button>

            <input
              type="number"
              value={props.item.qty}
              onChange={inputHandler}
              className="form-control qty-input mx-2"
              min="0"
              placeholder="0"
            />

            <button
              className="btn btn-sm btn-outline-secondary btn-qty"
              onClick={addHandler}
            >
              <i className="fas fa-plus" />
            </button>
          </div>

          <button onClick={delHandler} className=" btn btn-sm btn-danger">
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lists;
