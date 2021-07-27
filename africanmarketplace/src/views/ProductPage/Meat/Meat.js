import "./Meat.scss";
import React from "react";

function MeatCards() {
  return (
    <div className="wrapper">
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Eggs"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Milk"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?fish,ocean"}
        title="Fish"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?honey,hive"}
        title="Honey"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?meat,steak,lambchop"}
        title="Meat"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?poultry"}
        title="Poultry"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?vegetables"}
        title="Vegetables"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?fruits"}
        title="Fruits"
        description=""
      />
      <MeatCard
        img={"https://source.unsplash.com/1600x900/?cereal"}
        title="Cereal"
        description=""
      />
    </div>
  );
}

function MeatCard(props) {
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

export default MeatCards;
