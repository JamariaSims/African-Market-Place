import firebase from "firebase/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/HomePage/home";
import OwnerView from "./views/OwnerPage/OwnerView";
import Footer from "./components/Modals/FooterBar";
import { useState, useEffect } from "react";
import MarketPage from "./views/MarketPage/MarketPage";
import SearchBar2 from "./components/SearchBar2";
import ForgotModal from "./components/Modals/ForgotModal";
import Products from "./views/ProductPage/Vegetables/Products";
import Poultry from "./views/ProductPage/Poultry/Poultry.js"
import Milk from "./views/ProductPage/Milk/Milk.js"
import Meat from "./views/ProductPage/Meat/Meat.js"
import Honey from "./views/ProductPage/Honey/Honey.js"
import Fruits from "./views/ProductPage/Fruits/Fruits.js"
import Fish from "./views/ProductPage/Fish/Fish.js"
import Eggs from "./views/ProductPage/Eggs/Eggs.js"
import Cereal from "./views/ProductPage/Cereal/Cereal.js"

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
	const [userData, setUserData] = useState({
		username: "",
		password: "",
		email: "",
		Login: false,
		SignUp: false,
		Forgot: false,
	});
	useEffect(() => {}, [userData]);
	return (
		<Router>
			<Route exact path="/">
				<Home userData={userData} setUserData={setUserData} />
			</Route>
			<Route path="/user">
				<OwnerView />
			</Route>
			<Route path="/searchbar2">
				<SearchBar2 />
			</Route>
			<Route path="/MarketPage">
				<MarketPage userData={userData} setUserData={setUserData} />
			</Route>
			<Route path="/OwnerView">
				<OwnerView userData={userData} setUserData={setUserData} />
			</Route>
			<Route path="/forgot">
				<ForgotModal />
			</Route>
			<Route path="/Products">
				<Products userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Poultry">
				<Poultry userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Milk">
				<Milk userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Meat">
				<Meat userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Honey">
				<Honey userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Fruits">
				<Fruits userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Fish">
				<Fish userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Eggs">
				<Eggs userData={userData} setUserData={setUserData}/>
			</Route>
			<Route path="/Cereal">
				<Cereal userData={userData} setUserData={setUserData}/>
			</Route>
			<Footer />
		</Router>
	);
}

export default App;
