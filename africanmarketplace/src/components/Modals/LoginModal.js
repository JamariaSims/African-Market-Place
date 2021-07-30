import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { styled } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import { SignIn } from "../Authentication/Auth";

export default function LoginModal(props) {
	const { userData, setUserData } = props;
	const [errorLog, setErrorLog] = useState("");
	const [active, setActive] = useState(true);

	const menuToggle = () => {
		active ? setActive(false) : setActive(true);
	};
	const Link = styled("a")({
		textDecorationLine: "none",
		padding: "2%",
	});
	const LinkText = styled("a")({
		textDecorationLine: "none",
	});
	const Auth = styled("div")({
		width: "30%",
		margin: "0% auto",
		position: "absolute",
		zIndex: "10",
		right: "0",
	});
	var tempUser = {
		username: "",
		password: "",
		email: "",
		Login: false,
		SignUp: false,
		Forgot: false,
	};
	const onInputChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		tempUser = { ...tempUser, [name]: value };
		return;
	};
	const onSubmit = (e) => {
		e.preventDefault();
		SignIn(tempUser, setErrorLog, setUserData);
		return;
	};

	return (
		<>
			<Auth>
				<div>
					<Dialog
						open={active}
						aria-labelledby="form-dialog-title"
						onChange={onInputChange}
					>
						<DialogTitle id="form-dialog-title">Login</DialogTitle>
						<DialogContent>
							<DialogContentText>
								By continuing, you agree to our
								<LinkText href="https://lambdaschool.com/sms-terms-and-conditions">
									{` User Agreement `}
								</LinkText>
								and
								<LinkText href="https://lambdaschool.com/sms-terms-and-conditions">
									{` Privacy Policy`}
								</LinkText>
								.
							</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								name="email"
								type="email"
								fullWidth
							/>
							<DialogContentText>Email</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								name="password"
								type="password"
								defaultValue=""
								fullWidth
							/>
							<DialogContentText>Password</DialogContentText>
							{errorLog === "" ? null : (
								<Alert severity="error">
									<AlertTitle>Error</AlertTitle>
									<strong>{errorLog}</strong>
								</Alert>
							)}
							<Button
								onClick={() => {
									setUserData({ ...userData, ["SignUp"]: true });
									setActive(false);
								}}
								variant="contained"
							>
								Sign Up
							</Button>
							<Link href="/forgot" variant="contained">
								Forgot?
							</Link>
						</DialogContent>
						<DialogActions>
							<Button onClick={menuToggle} variant="outlined" color="primary">
								Cancel
							</Button>
							<Button onClick={onSubmit} variant="outlined" color="secondary">
								Enter
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</Auth>
		</>
	);
}
