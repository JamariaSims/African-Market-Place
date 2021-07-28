import "../Card.scss";
import React from "react";

function Cards() {
  return (
    <div className="wrapper">
      <Card
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description="Local & Exotic"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description="Bottled & Carton"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description="Perch & Tilapia"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description="Processed & Unprocessed"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?meat,steak,lambchop"}
        title="Meat"
        description="Beef, Pork, Goat"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description="Chicken & Turkey"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?vegetables"}
        title="Vegetables"
        description="Root & More"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?fruits"}
        title="Fruits"
        description="Bananas, Mangoes & More"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?grain"}
        title="Grains"
        description="Rice, Wheat & More"
      />
      <Card
        img={"https://source.unsplash.com/1600x900/?grain"}
        title="Other"
        description="Coffee, Tea & More"
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
