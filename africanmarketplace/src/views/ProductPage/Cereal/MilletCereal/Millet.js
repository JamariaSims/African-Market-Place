import "./Millet.scss";
import React from "react";

function MilletCards() {
  return (
    <div className="wrapper">
      <MilletCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Millet"
        description="Bulrush Millet"
      />
      <MilletCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Millet"
        description="Finger Millet"
      />
      <MilletCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Millet"
        description="Millet Flour"
      />
      <MilletCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Millet"
        description="Millet Grain"
      />
      <MilletCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Millet"
        description="Pearl Millet"
      />
      <MilletCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Millet"
        description="White Millet"
      />
    </div>
  );
}

function MilletCard(props) {
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

export default MilletCards;
