import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { SignIn, SignUp } from "../firebase/auth";

function AuthLogin(props) {
	const { action, setAction } = props;
	const { userData, setUserData } = props;
	const { users, setUsers } = props;
	const onChange = (e) => {
		const { value } = e.target;
		setUserData({ ...userData, [e.target.name]: value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const { email, password, userName } = userData;
		switch (e.target.name) {
			case "signup": {
				SignUp(email, password, userName, setAction);
				break;
			}
			default: {
				SignIn(email, password, userName, setAction);
			}
		}
	};
	useEffect(() => {
		const ref = firebase.database().ref("users/");
		ref.on("value", (snapshot) => {
			const data = snapshot.val();
			setUsers(data);
		});
	}, [action]);
	return action === "signedIn" ? null : (
		<div id="form">
			<div className="authForm">
				<form>
					<h5 className="card-title">Sauti's Market Place</h5>
					<p>
						By continuing, you agree to our{" "}
						<a href="UserAgreement">User Agreement</a> and{" "}
						<a href="PrivacyPolicy">Privacy Policy</a>.
					</p>
					<label>User Name</label>
					<input type="text" name="userName" onChange={onChange} />
					<label>Email</label>
					<input
						type="text"
						value={userData.email}
						name="email"
						onChange={onChange}
					/>

					<label>Password</label>
					<input name="password" type="text" onChange={onChange} />
					<p>{action}</p>
					<button onClick={onSubmit} name="enter" className="btn btn-primary">
						Enter
					</button>
					<button onClick={onSubmit} name="signup">
						SignUp
					</button>
				</form>
			</div>
		</div>
	);
}

export default AuthLogin;
