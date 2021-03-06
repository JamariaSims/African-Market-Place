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
import { uniqueNamesGenerator, names } from "unique-names-generator";
import pCommodities from "../../../components/ExcelData/pCommodities.json";
function Fruits(props) {
	const { userData, setUserData } = props;
	const [data, setData] = useState([]);
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
	console.log(pCommodities[90]["commodityproduct"]);
	const generator = new AvatarGenerator({});
	const rows = [];
	const test = () => {
		for (let i = 0; i < 50; i++) {
			const nameGen1 = uniqueNamesGenerator({
				dictionaries: [names],
			});
			const nameGen2 = [pCommodities];

			const numGen1 = Math.floor(Math.random() * 50);
			const numGen2 = Math.floor(Math.random() * 50);
			rows.push(
				createData(
					pCommodities[numGen2]["commodityproduct"],
					pCommodities[numGen2]["commoditycat"],
					numGen1,
					`${numGen2}$`,
					nameGen1
				)
			);
		}
	};
	test();
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
							<TableCell align="center">
								{" "}
								<Avatar
									alt={row.VendorName}
									src={generator.generateRandomAvatar()}
								/>
							</TableCell>

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

export default Fruits
