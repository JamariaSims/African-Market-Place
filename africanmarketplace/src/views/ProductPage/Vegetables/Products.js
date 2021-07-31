import "../Vegetables/Vegetables.scss";
import React from "react";
import Eggs from '../../../assets/Images/eggs.jpg'
import Fruits from '../../../assets/Images/fruits.jpg'
import Grains from '../../../assets/Images/grains.webp'
import Honey from '../../../assets/Images/honey.webp'
import Milk from '../../../assets/Images/milk.jpg'
import Poultry from '../../../assets/Images/poultry.webp'
import Fish from '../../../assets/Images/salmon.jpg'
import Steak from '../../../assets/Images/steak.jpg'
import Vegetables from '../../../assets/Images/vegetables.jpg'



function VegetableCards() {
  return (
    <div className="wrapper">
      <VegetableCard
        img={Eggs}
        title="Eggs"
        description=""
      />
      <VegetableCard
        img={Milk}
        title="Milk"
        description=""
      />
      <VegetableCard
        img={Fish}
        title="Fish"
        description=""
      />
      <VegetableCard
        img={Honey}
        title="Honey"
        description=""
      />
      <VegetableCard
        img={Steak}
        title="Meat"
        description=""
      />
      <VegetableCard
        img={Poultry}
        title="Poultry"
        description=""
      />
      <VegetableCard
        img={Vegetables}
        title="Vegetables"
        description=""
      />
      <VegetableCard
        img={Fruits}
        title="Fruits"
        description=""
        onClick
      />
      <VegetableCard
        img={Grains}
        title="Cereal"
        description=""
      />
    </div>
  );
}

function VegetableCard(props) {
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

export default VegetableCards;
