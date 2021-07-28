import "./Grain.scss";
import React from "react";

function GrainCards() {
  return (
    <div className="wrapper">
      <GrainCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize"
        description=""
      />
      <GrainCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Barley Cereal"
        description=""
      />
      <GrainCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Millet Cereal"
        description=""
      />
      <GrainCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Sorghum Cereal"
        description=""
      />
      <GrainCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Wheat Cereal"
        description=""
      />
      <GrainCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Rice Cereal"
        description=""
      />
    </div>
  );
}

function GrainCard(props) {
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

export default GrainCards;
