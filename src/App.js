import { useState } from "react/cjs/react.development";
import "./App.css";
import Lists from "./components/ItemList/Lists";
import InputCard from "./components/NewItem/InputCard";

const resources = [
  { title: "Coffee", price: 200, id: "1" },
  { title: "Eye Noddle", price: 400, id: "2" },
  { title: "Soy Milk", price: 700, id: "3" },
];

function App() {
  const [items, setItems] = useState(resources);
  const addItem = (item) => {
    const saveItem = {
      ...item,
      id: Math.random().toString(),
    };

    setItems((pre) => {
      return [saveItem, ...pre];
    });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <InputCard addItem={addItem} />
          </div>

          <div className="col-6">
            {items.map((item) => {
              return <Lists item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
