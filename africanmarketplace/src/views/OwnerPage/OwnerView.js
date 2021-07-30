import React, { useState, useEffect } from "react";
import ItemForm from "../../components/Owner/ItemForm";
import AddItem from "../../components/Owner/AddItem";
import "..//../components/Owner/Owner.scss";
import "../../Card.scss";
import NavigationBar from "../../components/Modals/NavigationBar";

function OwnerView(props) {
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

  const [productListData, setProductListData] = useState(ProductList);

  useEffect(() => {}, [productListData]);

  const { userData, setUserData } = props;
  const Tabs = ["Home", "View Page"];

  return (
    <div>
      <NavigationBar userData={userData} PageName={"Owner Page"} Tabs={Tabs} />
      <section className="itemContainer">
        <img src="africanmarketplace\src\assets\profile.png" />
        <label>Name</label>
        <input type="text"></input>
        <label>Location</label>
        <input type="text"></input>
        <label>Contact</label>
        <input type="number"></input>
        <button>Save Changes</button>
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
