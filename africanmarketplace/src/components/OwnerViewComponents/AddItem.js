import CategoryFilter from "./CategoryDropDown";
//import ToggleSwitch from "./Switch";

import React from "react";

/*function ProductList() {
  return (
    <div>
      <img className="product-image" src="#" />
      <label>Product Name</label>
      <input type="text" />
      <CategoryFilter />
      <label>Price</label>
      <input type="text" />
      <label>Item Description</label>
      <input type="text" />
    </div>
  );
}*/






function AddItem(props) {


  return (
    <div className="item">
      {" "}
      <div className="itemBody">
        {" "}
        <img src={props.img} className="itemImage" alt="" />{" "}
        <h2 className="itemName">{props.title}</h2>{" "}
        <p className="itemPrice">{props.price}</p>{" "}
        <p className="itemDescription">{props.description}</p>{" "}
      </div>{" "}
      <button className="itemButton">Save Changes</button>{" "}
    </div>
  );
}
export default AddItem;
