import "./Meat.scss";
import React from "react";

function MeatCards() {
  return (
    <div className="wrapper">
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?cow"}
        title="Beef"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?goat"}
        title="Goat"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?pig"}
        title="Pork"
        description=""
      />
    </div>
  );
}

function MeatCard(props) {
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

export default MeatCards;
