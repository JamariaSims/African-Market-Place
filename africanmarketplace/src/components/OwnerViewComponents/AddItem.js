import CategoryFilter from "./CategoryDropDown";
//import ToggleSwitch from "./Switch";
import "./Owner.scss";
import "../../Card.scss";
import { Container, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { DeleteOutlined } from "@material-ui/icons";

/*function ProductList() {
  return (
    <div>
      <img className="product-image" src="#" />
      <label>Product Name</label>
      <input type="text" />
      <CategoryFilter />
      <label>Price</label>
      <input type="text" />
      <label>Item Description</label>
      <input type="text" />
    </div>
  );
}*/

function AddItem(props) {
  return (
    <div className="card">
      {" "}
      <Card id="trash" className="cardBody">
        {" "}
        <div
          onClick={() => {
            document.getElementById("trash").classList.toggle("hide");
          }}
        >
          <CardHeader
            action={
              <IconButton>
                {" "}
                <DeleteOutlined />
              </IconButton>
            }
          ></CardHeader>
        </div>
        <h2 className="cardTitle">{props.title}</h2>
        <CardContent>
          <img className="cardImage" src={props.img} alt="" />{" "}
          <Typography>
            <p className="cardDescription">{props.price}</p>{" "}
            <p className="cardDescription">{props.description}</p>{" "}
          </Typography>
        </CardContent>
      </Card>{" "}
    </div>
  );
}
export default AddItem;
