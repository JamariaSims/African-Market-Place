import "./App.scss";
import React from "react";
import ReactDOM from "react-dom";
import eggs from "../src/assets/eggs.jpg";

function App() {
  return (
    <div className="wrapper">
      <Card img={eggs} title="Eggs" description="Local Eggs" />
      <Card img={eggs} title="Eggs" description="Local Eggs" />
      <Card img={eggs} title="Eggs" description="Local Eggs" />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} class="cardImage" />
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardDescription">{props.description}</p>
      </div>
      <button className="cardButton">Add To Cart</button>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
