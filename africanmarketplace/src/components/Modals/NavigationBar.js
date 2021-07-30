import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import * as CoolIcons from "@material-ui/icons/";
import { Link } from "react-router-dom";
import MarketPage from "../../Views/MarketPage/MarketPage";

export default function NavigationBar(props) {
	const { PageName, Tabs, userData } = props;
	const LinkWithStyle = styled("a")({
		textDecorationLine: "none",
		color: "white",
	});
	const useStyles = makeStyles((theme) => ({
		root: {
			"& > *": {
				margin: theme.spacing(1),
			},
		},
		grow: {
			flexGrow: 1,
		},
		Auth: {
			padding: "5%",
			textAlign: "center",
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			display: "none",
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: alpha(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: alpha(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
		sectionDesktop: {
			display: "none",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		sectionMobile: {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
	}));

	const classes = useStyles();

	/* -------------------------------------------------------------------------- */
	/*                              Return Statement                              */
	/* -------------------------------------------------------------------------- */
	return (
		<div className={classes.grow}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
					>
						<MenuIcon />
					</IconButton>
					<Typography className={classes.title} variant="h6" noWrap>
						{PageName}
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{userData.email !== "" ? (
							<IconButton edge="end" color="inherit">
								<Typography href="/" variant="h6" className={classes.title}>
									<LinkWithStyle href="/">{userData.email}</LinkWithStyle>
									<Typography>
										<LinkWithStyle>
											<CoolIcons.ShoppingCart />
										</LinkWithStyle>
									</Typography>
								</Typography>
							</IconButton>
						) : (
							<IconButton edge="end" color="inherit">
								<Typography href="/" variant="h6" className={classes.title}>
									<LinkWithStyle href="/">Login</LinkWithStyle>
								</Typography>
							</IconButton>
						)}
					</div>
				</Toolbar>
			</AppBar>
			<Toolbar>
				{Tabs.map((item) =>
					item === "All Products" ? (
						<Link to={"/MarketPage"}>
							<Button variant="contained" color="default">
								{item}
							</Button>
						</Link>
					) : (
						<div>
							<Button variant="contained" color="default">
								{item}
							</Button>
						</div>
					)
				)}
			</Toolbar>
		</div>
	);
}
