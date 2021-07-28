import "./Vegetables.scss";
import React from "react";

function VegetableCards() {
  return (
    <div className="wrapper">
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?chips"}
        title="Beans"
        description="Kidney, Red & More"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?flour"}
        title="Root Vegetables"
        description="Cassava & Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Seeds & Nuts"
        description="Sunflower, Ground & More"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Peas"
        description="Dry, Green & More"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Brinjals"
        description="Eggplants"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Cabbage"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Capsicums"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Carrots"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Cauliflower"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Chillies"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Cucumber"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Ginger"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Kale"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Lettuce"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Onions"
        description="Dry & Spring"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Tomatoes"
        description=""
      />
    </div>
  );
}

function VegetableCard(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} class="cardImage" alt="" />
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardDescription">{props.description}</p>
      </div>
      <button className="cardButton">View Products</button>
    </div>
  );
}

export default VegetableCards;
