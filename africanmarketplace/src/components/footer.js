import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: "100%",
		background: "",
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<div component="form" className={classes.root}>
			<div className="icons">
				<img src="" />
				<img src="" />
				<img src="" />
				<img src="" />
			</div>
			<div className="links">
				<a href="#">{`Sauti East Africa`}</a>
				<a href="#">{`Tearms and Conditions`}</a>
				<a href="#">{`Company Info`}</a>
			</div>
		</div>
	);
}
