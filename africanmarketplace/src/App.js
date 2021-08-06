import firebase from "firebase/app";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/HomePage/home";
import OwnerView from "./views/OwnerPage/OwnerView";
import Footer from "./components/Modals/FooterBar";
import { useReducer } from "react";
import MarketPage from "./views/MarketPage/MarketPage";
import SearchBar2 from "./components/SearchBar2";

import Crudi from "./Crud/Crudi";
import TutorialsList from "./Crud/OtherComponents/tutorials-list.component";
import Tutorial from "./Crud/OtherComponents/tutorial.component";
import AddTutorial from "./Crud/OtherComponents/add-tutorial.component";
import ForgotModal from "./components/Modals/ForgotModal";
import Products from "./views/ProductPage/Vegetables/Products";
import Poultry from "./views/ProductPage/Poultry/Poultry.js";
import Milk from "./views/ProductPage/Milk/Milk.js";
import Meat from "./views/ProductPage/Meat/Meat.js";
import Honey from "./views/ProductPage/Honey/Honey.js";
import Fruits from "./views/ProductPage/Fruits/Fruits.js";
import Fish from "./views/ProductPage/Fish/Fish.js";
import Eggs from "./views/ProductPage/Eggs/Eggs.js";
import Cereal from "./views/ProductPage/Cereal/Cereal.js";
import CustomReducer from "./Hooks/useReducer";
import WalledGarden from "./views/WalledGarden";

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
			<Route path="/test">
				<WalledGarden />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/searchbar2">
				<SearchBar2 />
			</Route>
			<Route path="/MarketPage">
				<MarketPage />
			</Route>
			<Route path="/OwnerView">
				<OwnerView />
			</Route>
			<Route path="/forgot">
				<ForgotModal />
			</Route>
			<Route path="/Products">
				<Products />
			</Route>
			<Route path="/Poultry">
				<Poultry />
			</Route>
			<Route path="/Milk">
				<Milk />
			</Route>
			<Route path="/Meat">
				<Meat />
			</Route>
			<Route path="/Honey">
				<Honey />
			</Route>
			<Route path="/Fruits">
				<Fruits />
			</Route>
			<Route path="/Fish">
				<Fish />
			</Route>
			<Route path="/Eggs">
				<Eggs />
			</Route>
			<Route path="/Cereal">
				<Cereal />
			</Route>
			<Route path="/CRUD">
				<Crudi />
				<Switch>
					<Route exact path="/tutorials" component={TutorialsList} />
					<Route exact path="/add" component={AddTutorial} />
					<Route path="/tutorials/:id" component={Tutorial} />
				</Switch>
			</Route>
			<Footer />
		</Router>
	);
}

export default App;
