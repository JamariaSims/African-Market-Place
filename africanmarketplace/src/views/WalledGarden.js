import React, { useState, useEffect } from "react";
import LoginModal from "../components/Modals/LoginModal";
import SignUpModal from "../components/Modals/SignUpModal";

function WalledGarden(props) {
	const { userData, setUserData } = props;
	const { Login } = userData;
	return (
		<div>
			{!Login ? (
				<LoginModal userData={userData} setUserData={setUserData} />
			) : null}
			{userData.SignUp ? (
				<SignUpModal userData={userData} setUserData={setUserData} />
			) : null}
		</div>
	);
}

export default WalledGarden;
