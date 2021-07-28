import "./Peas.scss";
import React from "react";

function PeasCards() {
  return (
    <div>
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?bananas"}
        title="Chic Pea"
        description=""
      />
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Cowpeas"
        description=""
      />
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Dry Peas"
        description=""
      />
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Fresh Peas"
        description=""
      />
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Green Peas"
        description=""
      />
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Peas"
        description=""
      />
      <PeasCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Pigeon Peas"
        description=""
      />
    </div>
  );
}

function PeasCard(props) {
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

export default PeasCards;
