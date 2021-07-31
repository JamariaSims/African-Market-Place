import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Crudi.css";
class Crudi extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand navbar-dark bg-dark">
					<a href="/tutorials" className="navbar-brand">
						African Market Place
					</a>
					<div className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link to={"/tutorials"} className="nav-link">
								Tutorials
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"/add"} className="nav-link">
								Add
							</Link>
						</li>
					</div>
				</nav>

				<div className="container mt-3"></div>
			</div>
		);
	}
}

export default Crudi;
