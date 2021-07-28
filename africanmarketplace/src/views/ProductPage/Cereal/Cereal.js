import "./Cereal.scss";
import React from "react";

function CerealCards() {
  return (
    <div className="wrapper">
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?meat,steak,lambchop"}
        title="Meat"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?vegetables"}
        title="Vegetables"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?fruits"}
        title="Fruits"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?cereal"}
        title="Cereal"
        description=""
      />
    </div>
  );
}

function CerealCard(props) {
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

export default CerealCards;
