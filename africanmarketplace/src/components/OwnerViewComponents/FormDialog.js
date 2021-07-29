import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { Forum } from '@material-ui/icons';

const info = "name:";


function SimpleDialog(props) {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemSubmit = (event) => {
  
  };
  
  const handleListItemChange = (event) => {
    
    
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List >
        <ListItem>
          <label>Buisness Name </label>
          <input type="text"
          onChange={()=>{handleListItemChange()}}></input>
        </ListItem>
        <ListItem> 
          <label>Location </label>
          <input type="text"></input>
        </ListItem>
        <ListItem>
          <label>Contact </label>
          <input type="number"></input>
        </ListItem>
        <ListItem>
          <button onSubmit={()=>{handleListItemSubmit()}}>Save Changes</button>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  //const [selectedValue, setSelectedValue] = React.useState(info);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    //setSelectedValue(value);
  };

  

  return (
    <div>
      <Typography variant="subtitle1"></Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}