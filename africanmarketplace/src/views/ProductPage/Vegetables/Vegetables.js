import "./Vegetables.scss";
import React from "react";

function VegetableCards() {
  return (
    <div className="wrapper">
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?beans"}
        title="Beans"
        description="Kidney, Red & More"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?tubers"}
        title="Root Vegetables"
        description="Cassava & Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?seeds"}
        title="Seeds & Nuts"
        description="Sunflower, Ground & More"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?peas"}
        title="Peas"
        description="Dry, Green & More"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?eggplant"}
        title="Brinjals"
        description="Eggplants"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cabbage"}
        title="Cabbage"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?capsicum"}
        title="Capsicums"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?carrot"}
        title="Carrots"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cauliflower"}
        title="Cauliflower"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?chillies"}
        title="Chillies"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cucumber"}
        title="Cucumber"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?ginger"}
        title="Ginger"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?kale"}
        title="Kale"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?lettuce"}
        title="Lettuce"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?onions"}
        title="Onions"
        description="Dry & Spring"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?tomatoes"}
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
