import React from "react";
import { useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { firestore } from "../firebase";
function CreateItem() {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`title ${title}`);
    console.log(`price ${price}`);
    firestore.collection("items").add({
      title,
      price,
      img,
      createdAt: new Date(),
      qty: Math.floor(Math.random() * 15),
    });
  }
  return (
    <div className="create-post">
      <h1>New Item Details</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Item Name</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="price-field">
          <label>price</label>
          <br />
          <AttachMoneyIcon />
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-field">
          <label>Image Link</label>
          <input
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <button className="create-post-btn">Create Item</button>
      </form>
    </div>
  );
}

export default CreateItem;
