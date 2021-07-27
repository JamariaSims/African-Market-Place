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


const ProductList = [
	{
		Image:"https://source.unsplash.com/1600x900/?milk,gallon",
		title:'Eggs',
		price:'3.99',
		description:"Eggs that come from a chicken"
	},

	{
		Image:"https://source.unsplash.com/1600x900/?milk,gallon",
		title:'Milk',
		price:'5.99',
		description:"Milk that comes from a cow"
	},

	{
		Image:"https://source.unsplash.com/1600x900/?milk,gallon",
		title:'Almonds',
		price:'10.99',
		description:"Nuts that come from a tree"
	},
]





function addItem(props) {
  return (
    <div className="item">
      {" "}
      <div className="itemBody">
        {" "}
        <img src={props.img} class="itemImage" alt="" />{" "}
        <h2 className="itemName">{props.title}</h2>{" "}
        <p className="itemPrice">{props.price}</p>{" "}
        <p className="itemDescription">{props.description}</p>{" "}
      </div>{" "}
      <button className="cardButton">Save Changes</button>{" "}
    </div>
  );
}
export default addItem;
