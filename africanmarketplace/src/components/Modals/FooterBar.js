import React from "react";
import { styled } from "@material-ui/core/styles";
import ImageData from "../ImageData";

const CoolFooter = styled("footer")({
	width: "100%",
	margin: "0% auto",
	display: "flex",
	position: "relative",
	flexDirection: "column",
	padding: "1%",
	background: "#BEE196",
});
const ImageHolder = styled("div")({
	margin: "0% auto",
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
				<ImageHolder>
					{" "}
					<ImageData imgName={"facebook"} />
				</ImageHolder>
				<ImageHolder>
					{" "}
					<ImageData imgName={"google"} />
				</ImageHolder>
				<ImageHolder>
					{" "}
					<ImageData imgName={"ig"} />
				</ImageHolder>
				<ImageHolder>
					{" "}
					<ImageData imgName={"twitter"} />
				</ImageHolder>
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
