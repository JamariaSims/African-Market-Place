import "./Banana.scss";
import React from "react";

function BananaCards() {
  return (
    <div>
      <BananaCard
        img={"https://source.unsplash.com/1600x900/?bananas"}
        title="Apple Bananas"
        description=""
      />
      <BananaCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Cavendish (Bogoya)"
        description=""
      />
      <BananaCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Cooking Bananas"
        description=""
      />
      <BananaCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Ripe Bananas"
        description=""
      />
    </div>
  );
}

function BananaCard(props) {
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

export default BananaCards;
