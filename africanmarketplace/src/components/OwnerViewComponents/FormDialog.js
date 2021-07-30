import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { DialogContent, DialogContentText } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";

import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import DialogTitle from "@material-ui/core/DialogTitle";

function SimpleDialog(infoData, setInfoData, open, onClose) {
  const handleClose = () => {
    onClose();
  };

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

  const informationData = {
    name: enteredBName,
    location: enteredLocal,
    contact: enteredContact,
  };

  setInfoData({ ...infoData, informationData });

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
            type="submit"
            onSubmit={() => {
              handleListItemSubmit();
            }}
          >
            Save Changes
          </button>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo(props) {
  const { infoData, setInfoData } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="subtitle1"></Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      {SimpleDialog(infoData, setInfoData, open, onClose)}
    </div>
  );
}
