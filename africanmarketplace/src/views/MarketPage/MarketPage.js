import React, { useState } from "react";
import NavigationBar from "../../components/Modals/NavigationBar";
import Listings from "./Listings";

function MarketPage(props) {
	const { userData, setUserData } = props;
	const Tabs = ["Home", "My Store"];
	return (
		<>
			<NavigationBar userData={userData} PageName={"MarketPage"} Tabs={Tabs} />
			<Listings />
		</>
	);
}

export default MarketPage;
