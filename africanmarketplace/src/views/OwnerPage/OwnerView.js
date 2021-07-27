// import Navigation from "../components/Nav";
import ProductList from "../../components/OwnerViewComponents/ProductList";

import React from "react";

function OwnerView() {
  return (
    <div>
      <div>
        <img src="#" />
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
      <ProductList />
    </div>
  );
}

export default OwnerView;
