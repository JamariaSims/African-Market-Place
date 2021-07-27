import React, { useState } from "react";
import { SignIn } from "../firebase/auth";
function AuthLogin() {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const onChange = (e) => {
		const { value } = e.target;
		setUserData({ ...userData, [e.target.name]: value });
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const { email, password } = userData;
		SignIn(email, password);
	};
	return (
		<div className="authForm">
			<div className="card" style={{ width: "30%" }}>
				<div className="card-body">
					<form onSubmit={onSubmit}>
						<h5 className="card-title">Sauti's Market Place</h5>
						<p>
							By continuing, you agree to our{" "}
							<a href="UserAgreement">User Agreement</a> and{" "}
							<a href="PrivacyPolicy">Privacy Policy</a>.
						</p>
						<label>Email</label>
						<input type="text" name="email" onChange={onChange} />

						<label>Password</label>
						<input name="password" type="text" onChange={onChange} />
						<button className="btn btn-primary">Enter</button>
						<a className="">SignUp</a>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AuthLogin;
