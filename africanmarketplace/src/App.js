import "./App.css";
import firebase from "firebase/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./views/navbar";

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
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
		</Router>
	);
}

export default App;