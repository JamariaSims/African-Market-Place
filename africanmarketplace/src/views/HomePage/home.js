import React from "react";
import Navbar from "../../components/navbar";

function Home(props) {
	const { PageName, Tabs } = props;
	console.log(Tabs);
	return (
		<>
			<Navbar PageName={PageName} Tabs={Tabs} />
			{/* <div className="main-container">
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
			<div className="2-container"></div> */}
			<div className="HomePage">
				<div className="container">
					<div className="firstSection">
						<div className="left1">
							<h2>Sauti Marketplace</h2>
							<p>
								"To empower women and families around the world, with equal
								business opportunities through culture.
							</p>
							<button className="feedback"> Leave Us Feedback </button>
						</div>

						<div className="right1">
							<img src="#"></img>
						</div>
					</div>
					<div className="secondSection">
						<div className="left2">
							<img src="#"></img>
						</div>
						<div className="right2">
							<h3>About Us</h3>
							<p> Lorem ipsum.</p>
						</div>
					</div>
				</div>
				<div className="thirdSection">
					<h3>Our Products</h3>
					<div className="livestock">
						<img src="#"></img>
						<button>Livestock</button>
					</div>
					<div className="roots">
						<img src="#"></img>
						<button>Roots and Tubers</button>
					</div>
					<div className="fruits">
						<img src="#"></img>
						<button>Fruits</button>
					</div>
					<div className="vegetables">
						<img src="#"></img>
						<button>Vegetables</button>
					</div>
				</div>
				<div className="footer">
					<div>
						<a href="#">
							{" "}
							<img src="#" alt="Facebook"></img>{" "}
						</a>
						<a href="#">
							{" "}
							<img src="#" alt="Twitter"></img>{" "}
						</a>
						<a href="#">
							{" "}
							<img src="#" alt="Instagram"></img>{" "}
						</a>
						<a href="#">
							{" "}
							<img src="#" alt="Google+"></img>{" "}
						</a>
					</div>
					<div>
						<h4> Sauti Marketplace </h4>
					</div>
					<div>
						<h5>Sauti East Africa Ltd, All rights reserved.</h5>
						<h5>|Terms and Conditions| Company Info</h5>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
