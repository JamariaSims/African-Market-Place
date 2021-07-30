import CategoryFilter from "./CategoryDropDown";
//import ToggleSwitch from "./Switch";
import "./Owner.scss";
import "../../Card.scss";
import { Container, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { DeleteOutlined } from "@material-ui/icons";



function AddItem(props) {

   const useStyles = makeStyles({
     table:{
       minWidth:650,
     },
   })

  

   const classes = useStyles


  return (
    <TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Product Name</TableCell>
						<TableCell align="center">Product Description</TableCell>
						<TableCell align="center">Product Price</TableCell>
						<TableCell align="center">Vendor</TableCell>
						

						<TableCell align="center"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
						<TableRow >
							<TableCell align="center">{props.title}</TableCell>
							<TableCell align="center">{props.description}</TableCell>
							<TableCell align="center">{props.price}</TableCell>
              <TableCell align="center">{props.vendor}</TableCell>
							<TableCell align="center">
								{" "}
							<IconButton>
                {" "}
                <DeleteOutlined />
              </IconButton>
							</TableCell>
						</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
  );
}
export default AddItem;

    // <div className="card">
    //   {" "}
    //   <Card id="trash" className="cardBody">
    //     {" "}
    //     <CardHeader
    //       action={
    //         <IconButton>
    //           {" "}
    //           <DeleteOutlined />
    //         </IconButton>
    //       }
    //       title={props.title}
    //       subheader={props.price}
    //     />
    //     <CardContent>
    //       <img className="cardImage" src={props.img} alt="" />{" "}
    //       <Typography>
    //         <p className="cardDescription">{props.description}</p>{" "}
    //       </Typography>
    //     </CardContent>
    //   </Card>{" "}
    // </div>