import "./Vegetables.scss";
import React from "react";

function VegetableCards() {
  return (
    <div className="wrapper">
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?chips"}
        title="Root & Tubers"
        description="Cassava Chips"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?flour"}
        title="Root & Tubers"
        description="Cassava Flour"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Root & Tubers"
        description="Cassava Fresh"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Root & Tubers"
        description="Dry Fermented Cassava"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cassava"}
        title="Root & Tubers"
        description="Sun Dried Cassava"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?potatoes"}
        title="Root & Tubers"
        description="Red Irish Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?potatoes"}
        title="Root & Tubers"
        description="Round Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?sweetpotato"}
        title="Root & Tubers"
        description="Sweet Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?"}
        title="Root & Tubers"
        description="White Fleshed Sweet Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?potato"}
        title="Root & Tubers"
        description="White Irish Potatoes"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?eggplant"}
        title="Brinjals"
        description="Brinjal / Eggplant"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cabbage"}
        title="Cabbages"
        description="Cabbage"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?capsicum"}
        title="Capsicums"
        description="Capsicum"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?carrot"}
        title="Carrots"
        description="Carrot"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cauliflower"}
        title="Cauliflowers"
        description="White Cauliflower"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?chillies"}
        title="Chillies"
        description="Chillies"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cucumber"}
        title="Cucumbers"
        description="Cucumber"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?zingiber"}
        title="Ginger"
        description="Ginger"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?kale"}
        title="Kales"
        description="Kale"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?lettuce"}
        title="Lettuce"
        description="Lettuce"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?shallots"}
        title="Onions"
        description="Dry Onions"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?schoenoprasum"}
        title="Onions"
        description="Spring Onions"
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?tomatoes"}
        title="Tomatoes"
        description="Tomatoes"
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
