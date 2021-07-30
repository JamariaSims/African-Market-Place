import "./App.css";
import firebase from "firebase/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/HomePage/home";
import OwnerView from "./views/OwnerPage/OwnerView";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import FishCards from "./views/ProductPage/Fish/Fish";
import Layout from "./views/OwnerPage/OwnerView";
import SearchBar2 from "./components/SearchBar2";

// Firebase Area //
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
//

function App() {
	return (
		<Router>
			<Route path="/">
				<LoginModal />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/user">
				<OwnerView />
			</Route>
			<Route path="/fish">
				<FishCards />
			</Route>
			<Route path="/nope">
				<Layout />
			</Route>
			<Route path="/searchbar2">
				<SearchBar2 />
			</Route>
			<Footer />
		</Router>
	);
}

export default App;
