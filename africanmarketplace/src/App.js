import "./App.css";
import firebase from "firebase/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/HomePage/home";
import Navbar from "./views/navbar";
import OwnerView from "./views/OwnerPage/OwnerView";
import FishCards from "./views/ProductPage/Fish/Fish";
import GrainCards from "./views/ProductPage/Grains/Grain";
import EggCards from "./views/ProductPage/Eggs/Eggs";
import FruitCards from "./views/ProductPage/Fruits/Fruits";
import HoneyCards from "./views/ProductPage/Honey/Honey";
import MeatCards from "./views/ProductPage/Meat/Meat";
import MilkCards from "./views/ProductPage/Milk/Milk";
import PoultryCards from "./views/ProductPage/Poultry/Poultry";
import VegetableCards from "./views/ProductPage/Vegetables/Vegetables";

const firebaseConfig = {
  apiKey: "AIzaSyB2wyupUcSOEyvODy4QECjjxqHHZJShXvY",
  authDomain: "african-market-place.firebaseapp.com",
  databaseURL: "https://african-market-place-default-rtdb.firebaseio.com",
  projectId: "african-market-place",
  storageBucket: "african-market-place.appspot.com",
  messagingSenderId: "127459408307",
  appId: "1:127459408307:web:b681ffacf04a56864533c6",
  measurementId: "G-KED6X0V47R",
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Route path="/">
        <Navbar />
        <Route path="/fish">
          <FishCards />
        </Route>
        <Route path="/grain">
          <GrainCards />
        </Route>
        <Route path="/eggs">
          <EggCards />
        </Route>
        <Route path="/fruit">
          <FruitCards />
        </Route>
        <Route path="/honey">
          <HoneyCards />
        </Route>
        <Route path="/meat">
          <MeatCards />
        </Route>
        <Route path="/milk">
          <MilkCards />
        </Route>
        <Route path="/poultry">
          <PoultryCards />
        </Route>
        <Route path="/vegetable">
          <VegetableCards />
        </Route>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/user">
        <OwnerView />
      </Route>
    </Router>
  );
}

export default App;
