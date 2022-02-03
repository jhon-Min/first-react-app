const Total = (props) => {
  return (
    <div className="d-flex justify-content-between">
      <h4>
        Total :<span className="text-primary ms-2">{props.items.length}</span>
      </h4>
      <h4>{props.items.reduce((acc, cur) => acc + cur.price, 0)} Ks</h4>
    </div>
  );
};

export default Total;
