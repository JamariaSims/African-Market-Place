
import ItemForm from "../../components/Owner/ItemForm";
import AddItem from "../../components/Owner/AddItem";
import "..//../components/Owner/Owner.scss";
import "../../Card.scss";
import NavigationBar from "../../components/Modals/NavigationBar";

import React, { useState, useEffect } from "react";

import SimpleDialogDemo from "../../components/Owner/FormDialog";
import BusinessInfo from "../../components/Owner/BusinessInfo";
import { Container } from "@material-ui/core";

function OwnerView(props) {
	const ProductList = [
		{
			id: "",
			vendor: "Chiggen",
			title: "Eggs",
			price: "3.99",
			description: "Eggs that come from a chicken",
		},

		{
			id: "",
			vendor: "CowsR'us",
			title: "Milk",
			price: "5.99",
			description: "Milk that comes from a cow",
		},

		{
			id: "",
			vendor: "NutriBoi",
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
				<Container>
					<BusinessInfo
					className="otherWrapper3"
					name={infoData[0]}
					location={infoData[1]}
					contact={infoData[2]}
					/>

				<SimpleDialogDemo infoData={infoData} setInfoData={setInfoData} />
			</Container>
			<section className="otherWrapper ownerSection">
				<p className="titleProducts">Products</p>
			</section>
			<section className="ownerSection">
				<ItemForm
					setProductList={setProductListData}
					productList={productListData}
				/>
			</section>
			<section>
				{productListData.map((product) => (
					<AddItem
						vendor={product.vendor}
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
