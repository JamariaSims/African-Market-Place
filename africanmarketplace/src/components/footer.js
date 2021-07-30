import React from "react";
import { styled } from "@material-ui/core/styles";
import facebook from "../Assets/fb.png";
import google from "../Assets/google.png";
import ig from "../Assets/ig.png";
import twitter from "../Assets/twitter.png";

const CoolFooter = styled("footer")({
  width: "100%",
  margin: "0% auto",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  padding: "1%",
  background: "#BEE196",
});
const CoolImg = styled("img")({
  margin: "2%",
  marginBottom: "0%",
});
const CoolA = styled("a")({
  padding: "1%",
  paddingTop: "2%",
  paddingBottom: "0%",
});
const CoolDiv1 = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  width: "50%",
  margin: "0% auto",
});
const CoolDiv2 = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export default function Footer() {
  return (
    <CoolFooter>
      <CoolDiv1>
        <CoolImg width="30px" src={facebook} />
        <CoolImg width="30px" src={google} />
        <CoolImg width="30px" src={ig} />
        <CoolImg width="30px" src={twitter} />
      </CoolDiv1>
      <CoolDiv2>
        <CoolA href="#">{`Sauti East Africa`}</CoolA>
        <CoolA>|</CoolA>
        <CoolA href="#">{`Tearms and Conditions`}</CoolA>
        <CoolA>|</CoolA>
        <CoolA href="#">{`Company Info`}</CoolA>
      </CoolDiv2>
    </CoolFooter>
  );
}
