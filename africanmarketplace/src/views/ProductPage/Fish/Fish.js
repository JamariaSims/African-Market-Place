import "./Fish.scss";
import React from "react";

function FishCards() {
  return (
    <div className="wrapper">
      <FishCard
        img={"https://source.unsplash.com/1600x900/?fish"}
        title="Nile Perch"
        description=""
      />
      <FishCard
        img={"https://source.unsplash.com/1600x900/?tilapia"}
        title="Tilapia"
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
