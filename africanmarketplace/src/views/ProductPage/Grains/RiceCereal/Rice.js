import "./Rice.scss";
import React from "react";

function RiceCards() {
  return (
    <div className="wrapper">
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Imported Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Kahama Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Kayiso Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Kilombero Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Mbeya Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Morogoro Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Paddy Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Rice Bran"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Super Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Unprocessed / Husked Rice"
      />
      <RiceCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Rice"
        description="Upland Rice"
      />
    </div>
  );
}

function RiceCard(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} class="cardImage" alt="" />
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardDescription">{props.description}</p>
      </div>
      <button className="cardButton">Add To Cart</button>
    </div>
  );
}

export default RiceCards;
