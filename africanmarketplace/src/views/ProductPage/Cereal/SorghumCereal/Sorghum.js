import "./Sorghum.scss";
import React from "react";

function SorghumCards() {
  return (
    <div className="wrapper">
      <SorghumCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Sorghum"
        description="Red Sorghum"
      />
      <SorghumCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Sorghum"
        description="Sorghum"
      />
      <SorghumCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Sorghum"
        description="Sorghum Flour"
      />
      <SorghumCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Sorghum"
        description="Sorghum Grain"
      />
      <SorghumCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Sorghum"
        description="White Sorghum"
      />
    </div>
  );
}

function SorghumCard(props) {
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

export default SorghumCards;
