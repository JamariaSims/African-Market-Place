import "./Barley.scss";
import React from "react";

function BarleyCards() {
  return (
    <div className="wrapper">
      <BarleyCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Barley"
        description=""
      />
    </div>
  );
}

function BarleyCard(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} class="cardImage" alt="" />
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardDescription">{props.description}</p>
      </div>
      <button className="cardButton">Add To Cart</button>
    </div>
  );
}

export default BarleyCards;
