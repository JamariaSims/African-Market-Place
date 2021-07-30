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
function ForgotModal() {
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
						<DialogTitle id="form-dialog-title">Forgot Your Login?</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Let's see if we can help. Please enter your email or password.
							</DialogContentText>
							<TextField
								autoFocus
								margin="dense"
								name="email"
								type="email"
								fullWidth
							/>
							<DialogContentText>Email</DialogContentText>
							<DialogTitle id="form-dialog-title">Or</DialogTitle>
							<TextField
								autoFocus
								margin="dense"
								name="username"
								type="text"
								defaultValue=""
								fullWidth
							/>
							<DialogContentText>Username</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button variant="outlined" color="primary">
								Cancel
							</Button>
							<Button variant="outlined" color="secondary">
								Complete
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</Auth>
		</div>
	);
}

export default ForgotModal;
