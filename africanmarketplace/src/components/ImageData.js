import facebook from "../assets/fb.png";
import google from "../assets/google.png";
import ig from "../assets/ig.png";
import twitter from "../assets/twitter.png";

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
