import "./Mango.scss";
import React from "react";

function MangoCards() {
  return (
    <div>
      <MangoCard
        img={"https://source.unsplash.com/1600x900/?bananas"}
        title="Local Mangoes"
        description=""
      />
      <MangoCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Ngowe Mangoes"
        description=""
      />
    </div>
  );
}

function MangoCard(props) {
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

export default MangoCards;
