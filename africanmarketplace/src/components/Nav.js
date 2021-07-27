import React, { useState } from "react";
import cart from "../assets/shoppingcart.png";
import { Link } from "react-router-dom";
import AuthLogin from "../components/authLogin";
import profile from "../assets/profile.png";

const Navigation = () => {
	const [action, setAction] = useState("");
	const [users, setUsers] = useState([]);
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		userName: "",
	});

	return (
		<>
			<AuthLogin
				userData={userData}
				setUserData={setUserData}
				action={action}
				setAction={setAction}
				users={users}
				setUsers={setUsers}
			/>
			<nav>
				<div className="searchBar">
					<h1>Products</h1>
					<div className="input">
						<input type="text" />
						<Link to="/cart">
							<img alt="Nope" width="35%" src={cart} />
						</Link>
						{action === "SignedIn" ? (
							<>
								<div
									id="loginBtn"
									onClick={() => {
										document.getElementById("form").classList.toggle("hide");
									}}
								>
									ffhhhhh
								</div>
							</>
						) : (
							<>
								<div
									id="loginBtn"
									onClick={() => {
										document.getElementById("form").classList.toggle("hide");
									}}
								>
									tt
								</div>
							</>
						)}
					</div>
				</div>
				<div className="cards">
					<div className="tab1">All Products</div>
					<div className="tab2">Animal Products</div>
					<div className="tab3">Vegetables</div>
					<div className="tab4">Fruits</div>
					<div className="tab5">Roots&Tubers</div>
					<div className="tab6">Others</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;