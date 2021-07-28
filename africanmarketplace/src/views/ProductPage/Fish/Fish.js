import "./Fish.scss";
import React from "react";

function FishCards() {
  return (
    <div className="wrapper">
      <FishCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?meat,steak,lambchop"}
        title="Meat"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?vegetables"}
        title="Vegetables"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?fruits"}
        title="Fruits"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?cereal"}
        title="Cereal"
        description=""
      />
    </div>
  );
}

function FishCard(props) {
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

export default FishCards;
