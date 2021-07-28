import "../Card.scss";
import React from "react";

function EggCards() {
  return (
    <div className="wrapper">
      <EggCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Local Eggs"
        description=""
      />
    </div>
  );
}

function EggCard(props) {
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

export default EggCards;
