import React from "react";
import Navbar from "../../components/navbar";

function Home(props) {
	const { PageName, Tabs } = props;
	console.log(Tabs);
	return (
		<>
			<Navbar PageName={PageName} Tabs={Tabs} />
			<div className="main-container">
				<div>
					<h3>Sauti Marketplace</h3>
					<p>
						Our mission is To empower women and families around the world, with
						equal business opportunity through culture.
					</p>
					<div>Leave Us Feedback</div>
				</div>
				<img
					src={"https://source.unsplash.com/1600x900/?africa"}
					width={"500px"}
				/>
			</div>
			<div className="1-container"></div>
			<div className="2-container"></div>
		</>
	);
}

export default Home;
