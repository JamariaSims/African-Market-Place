import "./Fruits.scss";
import React from "react";

function FruitCards() {
  return (
    <div className="wrapper">
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?avacados"}
        title="Avacado"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?bananas"}
        title="Bananas"
        description="Apple Bananas"
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Bananas"
        description="Cavendish (Bogoya)"
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Bananas"
        description="Cooking Bananas"
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?banana"}
        title="Bananas"
        description="Ripe Bananas"
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?passionfruit"}
        title="Passion Fruit"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?lemons"}
        title="Lemons"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?limes"}
        title="Limes"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?mango"}
        title="Mangoes"
        description="Local Mangoes"
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?mango"}
        title="Mangoes"
        description="Mangoes Ngowe"
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?oranges"}
        title="Oranges"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?pawpaw"}
        title="Pawpaw"
        description=""
      />
      <FruitCard
        img={"https://source.unsplash.com/1600x900/?pineapple"}
        title="Pineapples"
        description=""
      />
    </div>
  );
}

function FruitCard(props) {
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

export default FruitCards;
