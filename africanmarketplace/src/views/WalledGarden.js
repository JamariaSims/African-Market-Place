import React, { useState, useEffect } from "react";
import LoginModal from "../components/Modals/LoginModal";

function WalledGarden(props) {
	const { userData, setUserData } = props;
	const { Login } = userData;
	return (
		<div>
			{!Login ? (
				<LoginModal userData={userData} setUserData={setUserData} />
			) : null}
		</div>
	);
}

export default WalledGarden;
