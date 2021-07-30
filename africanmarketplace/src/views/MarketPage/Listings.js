import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as CoolIcons from "@material-ui/icons/";
import Avatar from "@material-ui/core/Avatar";
import { AvatarGenerator } from "random-avatar-generator";
import { Autocomplete } from "@material-ui/lab";

function Listings(props) {
  const { userData, setUserData } = props;
  const addToCart = (e) => {
    // setUserData({ ...userData, ["cart"]: "" });
    console.log(e.target);
  };
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  function createData(
    Name,
    Category,
    VendorAmount,
    VendorPrice,
    VendorName,
    VendorAvatar
  ) {
    return {
      Name,
      Category,
      VendorAmount,
      VendorPrice,
      VendorName,
      VendorAvatar,
    };
  }

  const generator = new AvatarGenerator({});

  const rows = [
    createData("Maize ", "Cereals", 6, "24$", "Jamaria"),
    createData("Cool Shirt", "Clothing & Shoes", 9, "37$", "JBars"),
    createData("Cool Lip Gloss", "Cosmetics", 16, "24$", "DavidS"),
    createData("Fresh Nile Perch", "Fish Products", 3.7, 67, "BrandonV"),
    createData("Lime", "Fruits", 16, 49, "JBars"),
    createData("Beans ", "Legumes", 6, 24, "Jamaria"),
    createData("Groundnuts", "Pulses", 9, 37, "DavidS"),
    createData("Timber", "Timber", 16, 24, "Jamaria"),
    createData("Irish Tubers", "Fish Products", 3, 67, "DavidS"),
    createData("Onions", "Vegetables", 16, 49, "BrandonV"),
  ];
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Vendor Amount</TableCell>
            <TableCell align="right">Vendor Price</TableCell>
            <TableCell align="right">Vendor Name</TableCell>

            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Category}</TableCell>
              <TableCell align="right">{row.VendorAmount}</TableCell>
              <TableCell align="right">{row.VendorPrice}</TableCell>
              <TableCell align="right">{row.VendorName}</TableCell>

              <Avatar
                alt={row.VendorName}
                src={generator.generateRandomAvatar()}
              />

              <TableCell align="right">
                <CoolIcons.AddCircleOutlineOutlined />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Listings;
