import facebook from "../Assets/fb.png";
import google from "../Assets/google.png";
import ig from "../Assets/ig.png";
import twitter from "../Assets/twitter.png";
import React from "react";

function ImageData(props) {
  const { imgName } = props;
  switch (imgName) {
    case "facebook": {
      return <img width={"40%"} src={facebook} />;
    }
    case "google": {
      return <img width={"40%"} src={google} />;
    }
    case "ig": {
      return <img width={"45%"} src={ig} />;
    }
    case "twitter": {
      return <img width={"40%"} src={twitter} />;
    }
    default: {
      break;
    }
  }
}

export default ImageData;
