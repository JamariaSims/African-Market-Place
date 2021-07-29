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
import { UserCheck, SignUp } from "../Authentication/Auth";
function SignUpModal(props) {
	const { userData, setUserData } = props;
	const [errorLog, setErrorLog] = useState("");
	var tempUser = {
		email: "",
		password: "",
	};
	const Link = styled("a")({
		textDecorationLine: "none",
	});
	const Auth = styled("div")({
		width: "30%",
		margin: "0% auto",
		position: "absolute",
		zIndex: "10",
		right: "0",
	});
	const onInputChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		tempUser = { ...tempUser, [name]: value };
		console.log(tempUser);
	};
	const verifyInfo = (e) => {
		e.preventDefault();
		SignUp(tempUser, setUserData, userData, setErrorLog);
	};
	return (
		<div>
			<Auth>
				<div>
					<Dialog
						open={true}
						aria-labelledby="form-dialog-title"
						onChange={onInputChange}
					>
						<DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
						<DialogContent>
							<DialogContentText>
								By continuing, you agree to our
								<Link href="https://lambdaschool.com/sms-terms-and-conditions">
									{` User Agreement `}
								</Link>
								and
								<Link href="https://lambdaschool.com/sms-terms-and-conditions">
									{` Privacy Policy`}
								</Link>
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
								type="text"
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
						</DialogContent>
						<DialogActions>
							<Button variant="outlined" color="primary">
								Cancel
							</Button>
							<Button onClick={verifyInfo} variant="outlined" color="secondary">
								Complete
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</Auth>
		</div>
	);
}

export default SignUpModal;
