import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as MaterialCore from "@material-ui/core";
function CartModal() {
	const [active, setActive] = useState(false);
	const useStyles = makeStyles((theme) => ({
		root: {
			"& > *": {
				padding: theme.spacing(1),
				backgroundColor: "#556f44",
			},
		},
		CartHolder: {
			width: "800px",
		},
	}));

	const classes = useStyles();
	return (
		<div>
			<MaterialCore.Dialog
				open={active}
				aria-labelledby="form-dialog-title"
				onChange={""}
			>
				<MaterialCore.DialogTitle id="form-dialog-title">
					{" "}
					My Cart
				</MaterialCore.DialogTitle>
				<MaterialCore.Paper className={classes.CartHolder}></MaterialCore.Paper>
				<MaterialCore.DialogActions>
					<MaterialCore.Button
						onClick={() => {
							setActive(!active);
						}}
						variant="outlined"
						color="primary"
					>
						Cancel
					</MaterialCore.Button>
					<MaterialCore.Button variant="outlined" color="secondary">
						Ready To Check Out!
					</MaterialCore.Button>
				</MaterialCore.DialogActions>
			</MaterialCore.Dialog>
		</div>
	);
}

export default CartModal;
