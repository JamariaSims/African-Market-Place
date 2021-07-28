import "./Fruits.scss";
import React from "react";

function FruitCards() {
  return (
    <div className="wrapper">
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?meat,steak,lambchop"}
        title="Meat"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?vegetables"}
        title="Vegetables"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?fruits"}
        title="Fruits"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?cereal"}
        title="Cereal"
        description=""
      />
    </div>
  );
}

function FruitCard(props) {
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

export default FruitCards;
