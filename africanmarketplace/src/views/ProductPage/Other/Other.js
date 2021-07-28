import "./Other.scss";
import React from "react";

function OtherCards() {
  return (
    <div className="wrapper">
      <OtherCard
        img={"https://source.unsplash.com/1600x900/?avacados"}
        title="Coffee (Arabica)"
        description=""
      />
      <OtherCard
        img={"https://source.unsplash.com/1600x900/?bananas"}
        title="Coffee (Robusta)"
        description=""
      />
      <OtherCard
        img={"https://source.unsplash.com/1600x900/?passionfruit"}
        title="Unprocessed Cotton"
        description=""
      />
      <OtherCard
        img={"https://source.unsplash.com/1600x900/?lemons"}
        title="Unprocessed Tea"
        description=""
      />
      <OtherCard
        img={"https://source.unsplash.com/1600x900/?limes"}
        title="Tobacco"
        description=""
      />
      <OtherCard
        img={"https://source.unsplash.com/1600x900/?mango"}
        title="Unprocessed Vanilla"
        description=""
      />
    </div>
  );
}

function OtherCard(props) {
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

export default OtherCards;
