const Lists = (props) => {
  return (
    <div className="card shadow-sm mb-2">
      <div className="card-body d-flex justify-content-between">
        <h4 className="mb-0">{props.item.title}</h4>
        <h5 className="mb-0">{props.item.price} Ks</h5>
      </div>
    </div>
  );
};

export default Lists;
