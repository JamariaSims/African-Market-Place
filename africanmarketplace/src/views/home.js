import React from "react";
import Cards from "../components/Card";
import React, { useState } from "react";
import AuthLogin from "../components/authLogin";
import cart from "../assets/shoppingcart.png";
import { Link } from "react-router-dom";
import OwnerView from "./OwnerView";

function Home() {
	return (
		<>
			<div>
				<Cards />
			</div>
			<OwnerView />
		</>
	);
}

export default Home;
