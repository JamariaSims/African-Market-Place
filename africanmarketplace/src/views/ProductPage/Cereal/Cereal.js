import "./Cereal.scss";
import React from "react";

function CerealCards() {
  return (
    <div className="wrapper">
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Maize Cereal"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Barley Cereal"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Barley Cereal"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Barley Cereal"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Barley Cereal"
        description=""
      />
      <CerealCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Barley Cereal"
        description=""
      />
    </div>
  );
}

function CerealCard(props) {
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

export default CerealCards;
