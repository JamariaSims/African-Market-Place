import React, { useState, useEffect } from "react";
import ItemForm from "../../components/Owner/ItemForm";
import AddItem from "../../components/Owner/AddItem";
import "..//../components/Owner/Owner.scss";
import "../../Card.scss";
import NavigationBar from "../../components/Modals/NavigationBar";

import React, { useState, useEffect } from "react";
import ItemForm from "../../components/OwnerViewComponents/ItemForm";
import SimpleDialogDemo from "../../components/OwnerViewComponents/FormDialog";
import BuissnesInfo from "../../components/OwnerViewComponents/BuissnesInfo";

function OwnerView() {
	const ProductList = [
		{
			id: "",
			image: "https://source.unsplash.com/800x900/?eggs",
			title: "Eggs",
			price: "3.99",
			description: "Eggs that come from a chicken",
		},

		{
			id: "",
			image: "https://source.unsplash.com/800x900/?milk",
			title: "Milk",
			price: "5.99",
			description: "Milk that comes from a cow",
		},

		{
			id: "",
			image: "https://source.unsplash.com/800x900/?almonds",
			title: "Almonds",
			price: "10.99",
			description: "Nuts that come from a tree",
		},
	];

	const [productListData, setProductListData] = useState(ProductList);

	const [infoData, setInfoData] = useState([]);
	const { userData, setUserData } = props;
	const Tabs = ["Home", "Owner Editor", "View Page"];

	return (
		<div>
			<NavigationBar userData={userData} PageName={"Owner Page"} Tabs={Tabs} />
				<section className="itemContainer">
					<img src="africanmarketplace\src\assets\profile.png" />

					<BuissnesInfo
					name={infoData[0]}
					location={infoData[1]}
					contact={infoData[2]}
					/>

				<SimpleDialogDemo infoData={infoData} setInfoData={setInfoData} />
			</section>
			<section className="otherWrapper">
				<p className="titleProducts">Products</p>
			</section>
			<section>
				<ItemForm
					setProductList={setProductListData}
					productList={productListData}
				/>
			</section>
			<section className="otherWrapper2">
				{productListData.map((product) => (
					<AddItem
						img={product.image}
						title={product.title}
						price={product.price}
						description={product.description}
					/>
				))}
			</section>
		</div>
	);
}

export default OwnerView;
