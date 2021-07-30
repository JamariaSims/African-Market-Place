import firebase from "firebase/app";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/HomePage/Home";
import OwnerView from "./views/OwnerPage/OwnerView";
import Footer from "./components/Modals/FooterBar";
import { useState, useEffect } from "react";
import MarketPage from "./views/MarketPage/MarketPage";
import SearchBar2 from "./components/SearchBar2";

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
      <Footer />
    </Router>
  );
}

export default App;
