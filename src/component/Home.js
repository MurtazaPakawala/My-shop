import React from "react";
import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    firestore
      .collection("items")
      .get()
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        console.log("items", items);
        setItems(items);
      });
  }, []);
  return (
    <div className="home">
      <h1>Items Display</h1>

      {items.map((item, index) => (
        <div className="item" key={`item-${index}`}>
          <img width={200} height={150} src={item.img} alt="cant load"></img>
          <Link to={`/item/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
          <AttachMoneyIcon />
          <p>{item.price}</p>
          <button>Sell</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
