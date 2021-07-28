import React from "react";
import "./CardMaker.scss";
function CardMaker(props) {
	const { title } = props;
	return (
		<div className="cardHolder">
			<div className="card">
				<div className="cardBody">
					<img
						src={`https://source.unsplash.com/1600x900/?${title}`}
						class="cardImage"
						alt=""
					/>
					<h2 className="cardTitle">{title}</h2>
					<p className="cardDescription">description</p>
				</div>
				<button className="cardButton">View Products</button>
			</div>
		</div>
	);
}

export default CardMaker;
