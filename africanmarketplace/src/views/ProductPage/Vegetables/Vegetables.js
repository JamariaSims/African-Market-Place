import "../Card.scss";
import React from "react";

function VegetableCards() {
  return (
    <div className="wrapper">
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?meat,steak,lambchop"}
        title="Meat"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?vegetables"}
        title="Vegetables"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?fruits"}
        title="Fruits"
        description=""
      />
      <VegetableCard
        img={"https://source.unsplash.com/1600x900/?cereal"}
        title="Cereal"
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