import "./Beans.scss";
import React from "react";

function BeanCards() {
  return (
    <div className="wrapper">
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?eggs"}
        title="Agwedde Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Beans (K132)"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Canadian Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Mwitemania Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Rosecoco Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Black Beans (Dolichos)"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Dolichos (Njahi)"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Green Gram"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Kidney Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Mixed Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Mwezi Moja"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Nambale Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Old Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Red Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Soya Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="White Beans"
        description=""
      />
      <BeanCard
        img={"https://source.unsplash.com/1600x900/?milk,gallon"}
        title="Yellow Beans"
        description=""
      />
    </div>
  );
}

function BeanCard(props) {
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

export default BeanCards;
