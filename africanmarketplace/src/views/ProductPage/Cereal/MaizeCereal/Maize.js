import "./Maize.scss";
import React from "react";

function MaizeCards() {
  return (
    <div className="wrapper">
      <MaizeCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize"
        description="Dry Maize"
      />
      <MaizeCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize"
        description="Green Maize"
      />
      <MaizeCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize"
        description="Regular"
      />
      <MaizeCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize"
        description="Maize Bran"
      />
      <MaizeCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize"
        description="Maize Flour"
      />
    </div>
  );
}

function MaizeCard(props) {
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

export default MaizeCards;
