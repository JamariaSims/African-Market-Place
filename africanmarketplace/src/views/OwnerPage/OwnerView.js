// import Navigation from "../components/Nav";
import AddItem from "../../components/OwnerViewComponents/AddItem";
import "./Owner.scss";

import React from "react";

function OwnerView() {
  const ProductList = [
    {
      image: "https://source.unsplash.com/800x900/?eggs",
      title: "Eggs",
      price: "3.99",
      description: "Eggs that come from a chicken",
    },

    {
      image: "https://source.unsplash.com/800x900/?milk",
      title: "Milk",
      price: "5.99",
      description: "Milk that comes from a cow",
    },

    {
      image: "https://source.unsplash.com/800x900/?almonds",
      title: "Almonds",
      price: "10.99",
      description: "Nuts that come from a tree",
    },
  ];

  return (
    <div className='otherWrapper'>

      <div>
        <img src="africanmarketplace\src\assets\profile.png" />
        <label>Name</label>
        <input type="text"></input>
        <label>Location</label>
        <input type="text"></input>
        <label>Contact</label>
        <input type="number"></input>
        <button>Save Changes</button>
      </div>
      <div>
        <h3>Products</h3>
        <button>Add Product</button>
      </div>
      
        {ProductList.map((product) => (
          <AddItem
            img={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))};
       
    </div>
  );
}

export default OwnerView;

