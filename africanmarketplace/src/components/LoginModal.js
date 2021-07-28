import React, { useState, useEffect } from "react";
import { SignIn, SignUp } from "./Auth/auth";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { styled } from "@material-ui/core/styles";

export default function LoginModal() {
	/* ------------------------------ Modal Switch ------------------------------ */
	const [open, setOpen] = React.useState(false);
	const OpenLoginMenu = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	/* ------------------------------ Modal Style ------------------------------ */
	const Auth = styled("div")({
		width: "30%",
		margin: "0% auto",
		position: "absolute",
		zIndex: "10",
		right: "0",
	});
	const SignUp = styled("a")({
		fontSize: "80%",
	});
	/* ------------------------------ Modal Init ------------------------------ */
	useEffect(() => {
		OpenLoginMenu();
	}, []);
	/* ------------------------------ Modal Return ------------------------------ */
	return (
		<Auth>
			<div>
				<Dialog open={open} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Login</DialogTitle>
					<DialogContent>
						<DialogContentText>
							By continuing, you agree to our
							<a href="https://lambdaschool.com/sms-terms-and-conditions">
								{` User Agreement `}
							</a>
							and
							<a href="https://lambdaschool.com/sms-terms-and-conditions">
								{` Privacy Policy`}
							</a>
							.
						</DialogContentText>

						<TextField
							autoFocus
							margin="dense"
							name="userName"
							type="text"
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

						<SignUp name={"SignUp"}>Sign Up</SignUp>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button value={"SignUp"} color="primary">
							Enter
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</Auth>
	);
}
