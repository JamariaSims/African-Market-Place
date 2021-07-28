import "./Poultry.scss";
import React from "react";

function PoultryCards() {
  return (
    <div className="wrapper">
      <PoultryCard
        img={"https://source.unsplash.com/1600x900/?rooster"}
        title="Exotic Chicken"
        description=""
      />
      <PoultryCard
        img={"https://source.unsplash.com/1600x900/?chicken"}
        title="Local Chicken"
        description=""
      />
      <PoultryCard
        img={"https://source.unsplash.com/1600x900/?meleagris"}
        title="Turkey"
        description=""
      />
    </div>
  );
}

function PoultryCard(props) {
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

export default PoultryCards;
