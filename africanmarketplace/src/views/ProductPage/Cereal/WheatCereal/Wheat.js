import "./Wheat.scss";
import React from "react";

function WheatCards() {
  return (
    <div className="wrapper">
      <WheatCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Wheat"
        description="Wheat"
      />
      <WheatCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Wheat"
        description="Wheat Bran"
      />
      <WheatCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Wheat"
        description="Wheat Flour"
      />
    </div>
  );
}

function WheatCard(props) {
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

export default WheatCards;
