import { useState } from "react/cjs/react.development";
import "./App.css";
import Lists from "./components/ItemList/Lists";
import Total from "./components/ItemList/Total";
import InputCard from "./components/NewItem/InputCard";

const resources = [
  { title: "Coffee", price: 200, id: "1", qty: 1 },
  { title: "Eye Noddle", price: 400, id: "2", qty: 1 },
  { title: "Soy Milk", price: 700, id: "3", qty: 1 },
];

function App() {
  const [items, setItems] = useState(resources);

  // Save item to the list
  const addItem = (item) => {
    const saveItem = {
      ...item,
      id: Math.random().toString(),
      qty: 1,
    };

    setItems((pre) => {
      return [saveItem, ...pre];
    });
  };

  console.log(items);

  // Remove item from the list
  const delItem = (id) => {
    setItems((pre) => {
      return pre.filter((item) => item.id !== id);
    });
  };

  // add & remove quantity
  const addQty = (x) => {
    let current = items.find((item) => item.id == x.id);
    let remove = items.filter((item) => item.id !== x.id);
    current.qty++;
    // const index = items.findIndex((el, index) => {
    //   if (el.title == item.title) {
    //     return true;
    //   }
    // });
  };

  const reduceQty = (id) => {
    let current = items.find((item) => item.id == id);
    if (current.qty > 1) {
      current.qty -= 1;
    }
    console.log(current);
  };

  let notFound = <h4>No Item here....</h4>;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <InputCard addItem={addItem} />
          </div>

          <div className="col-6">
            <Total items={items} />
            <hr />
            {items.length
              ? items.map((item) => {
                  return (
                    <Lists
                      item={item}
                      addQty={addQty}
                      reduceQty={reduceQty}
                      delItem={delItem}
                      key={item.id}
                    />
                  );
                })
              : notFound}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
