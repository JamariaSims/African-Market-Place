import React, { useState, useRef } from "react";
import CartModal from "../components/Modals/CartModal";
import ForgotModal from "../components/Modals/ForgotModal";
import LoginModal from "../components/Modals/LoginModal";
import SignUpModal from "../components/Modals/SignUpModal";
import CustomReducer from "../Hooks/useReducer";
import MarketPage from "./MarketPage/MarketPage";
// const onSignUp = () => {
// 	setUserData({ ...userData, ["Login"]: false, ["SignUp"]: true });
// };
// const onLogOut = () => {};
// const onForgot = () => {};
function WalledGarden() {
	const [user, dispatch] = CustomReducer();

	return (
		<>
			<LoginModal />
			<SignUpModal />
			<ForgotModal />
		</>
	);
}

export default WalledGarden;
