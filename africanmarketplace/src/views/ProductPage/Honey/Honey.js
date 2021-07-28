import "./Honey.scss";
import React from "react";

function HoneyCards() {
  return (
    <div className="wrapper">
      <HoneyCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Processed Honey"
        description=""
      />
      <HoneyCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Unprocessed Honey"
        description=""
      />
    </div>
  );
}

function HoneyCard(props) {
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

export default HoneyCards;
