import "./Seed.scss";
import React from "react";

function SeedCards() {
  return (
    <div className="wrapper">
      <SeedCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Ground Nuts"
        description=""
      />
      <SeedCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Groundnuts"
        description=""
      />
      <SeedCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Simsim"
        description=""
      />
      <SeedCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Sunflower Seed"
        description=""
      />
      <SeedCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Sunflower Seed Cake"
        description=""
      />
    </div>
  );
}

function SeedCard(props) {
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

export default SeedCards;
