import "./RootVeg.scss";
import React from "react";

function RootCards() {
  return (
    <div className="wrapper">
      <RootCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Cassava Chips"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Cassava Flour"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Cassava Fresh"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Dry Fermented Cassava"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Sun Dried Cassava"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Red Irish Potatoes"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Round Pototes"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Sweet Potatoes"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="White Fleshed Sweet Potatoes"
        description=""
      />
      <RootCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="White Irish Potatoes"
        description=""
      />
    </div>
  );
}

function RootCard(props) {
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

export default RootCards;
