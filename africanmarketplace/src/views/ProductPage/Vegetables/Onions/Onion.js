import "./Onion.scss";
import React from "react";

function OnionCards() {
  return (
    <div className="wrapper">
      <OnionCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Dry Onions"
        description=""
      />
      <OnionCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Spring Onions"
        description=""
      />
    </div>
  );
}

function OnionCard(props) {
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

export default OnionCards;
