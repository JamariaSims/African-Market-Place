import "../src/Card.scss";
import React from "react";
import ReactDOM from "react-dom";

function Cards() {
  return (
    <div className="wrapper">
      <Card
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description=""
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description=""
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description=""
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description=""
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?meat,filet"}
        title="Meat"
        description=""
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description=""
      />
    </div>
  );
}

function Card(props) {
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

export default Cards;

ReactDOM.render(<Cards />, document.getElementById("root"));
