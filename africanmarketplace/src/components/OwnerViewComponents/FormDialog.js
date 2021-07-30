import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function SimpleDialogDemo(props) {
	const { infoData, setInfoData } = props;
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = (value) => {
		setOpen(false);
	};
	// SimpleDialog.propTypes = {
	//   onClose: PropTypes.func.isRequired,
	//   open: PropTypes.bool.isRequired,
	// };
	return (
		<div>
			<Typography variant="subtitle1"></Typography>
			<br />
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Edit
			</Button>
			{SimpleDialog(handleClose, setInfoData, infoData, open, setOpen)}
		</div>
	);
}

function SimpleDialog(onClose, setInfoData, infoData, open, setOpen) {
	const handleClose = () => {};
	const handleListItemSubmit = (event) => {
		event.preventDefault();
	};

	//const { infoData, setInfoData } = props;
	const [enteredBName, setEnteredBName] = useState("");
	const [enteredLocal, setEnteredLocal] = useState("");
	const [enteredContact, setEnteredContact] = useState("");

	const nameChangeHandler = (event) => {
		setEnteredBName(event.target.value);
	};
	const localChangeHandler = (event) => {
		setEnteredLocal(event.target.value);
	};
	const contactChangeHandler = (event) => {
		setEnteredContact(event.target.value);
	};

	const informationData = [enteredBName, enteredLocal, enteredContact];

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="simple-dialog-title"
			open={open}
		>
			<DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
			<List>
				<ListItem>
					<label>Buisness Name </label>
					<input
						type="text"
						value={enteredBName}
						onChange={nameChangeHandler}
					></input>
				</ListItem>
				<ListItem>
					<label>Location </label>
					<input
						type="text"
						value={enteredLocal}
						onChange={localChangeHandler}
					></input>
				</ListItem>
				<ListItem>
					<label>Contact </label>
					<input
						type="number"
						value={enteredContact}
						onChange={contactChangeHandler}
					></input>
				</ListItem>
				<ListItem>
					<button
						onClick={() => {
							setInfoData(informationData);
							setOpen(false);
						}}
					>
						Save Changes
					</button>
				</ListItem>
			</List>
		</Dialog>
	);
}
