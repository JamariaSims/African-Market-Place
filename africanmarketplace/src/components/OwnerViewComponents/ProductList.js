import CategoryFilter from "./CategoryDropDown";
//import ToggleSwitch from "./Switch";

import React from "react";

function ProductList() {
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
}

export default ProductList;
