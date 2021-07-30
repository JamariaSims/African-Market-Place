import React from "react";
import Commodities from "../components/ExcelData/Commodities.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function SearchBar2() {
	const data = (option) => option.procedurecommoditycat;
	return (
		<Autocomplete
			id="combo-box-demo"
			options={Commodities}
			getOptionLabel={data}
			style={{ width: 300 }}
			renderInput={(params) => (
				<TextField {...params} label="Search..." variant="outlined" />
			)}
		/>
	);
}
