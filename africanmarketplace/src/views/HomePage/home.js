import React from "react";
import Navbar from "../../components/navbar";
import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MainBody = styled("div")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	margin: "0% auto",
	padding: "0% auto",
});
const FirstBody = styled("div")({
	width: "100%",
	padding: "5%",
	paddingBottom: "1%",
	display: "flex",
	justifyContent: "space-between",
	margin: "0% 0% 0% 0%",
	marginTop: "5%",
	flexDirection: "row",
	background: "#BEE196",
});
const FirstBodyInfo = styled("div")({
	display: "flex",
	flexDirection: "column",
	width: "50%",
	textAlign: "center",
	margin: "0% auto",
});
const SecondBodyInfo = styled("div")({
	width: "100%",
	padding: "5%",
	paddingTop: "0%",
	display: "flex",
	justifyContent: "space-between",
	margin: "0% 0% 0% 0%",
	marginTop: "2%",
	flexDirection: "row",
});
const SecondBody = styled("div")({
	width: "100%",
	padding: "5%",
	paddingTop: "0%",
	display: "flex",
	justifyContent: "space-between",
	margin: "0% 0% 0% 0%",
	marginTop: "5%",
	flexDirection: "row",
});
const ThirdBody = styled("div")({
	width: "100%",
	justifyContent: "space-between",
	margin: "0% auto",
});
const Title = styled("h1")({
	width: "70%",
	textAlign: "center",
	margin: "0% auto",
	marginTop: "2%",
});

const Paragraph1 = styled("p")({
	width: "70%",
	textAlign: "center",
	margin: "0% auto",
	marginBottom: "5%",
	marginTop: "3%",
});
const Paragraph2 = styled("p")({
	width: "90%",
	textAlign: "center",
	margin: "0% auto",
	marginBottom: "5%",
	marginTop: "3%",
});

function Home(props) {
	const { PageName, Tabs } = props;
	console.log(Tabs);
	return (
		<>
			<Navbar PageName={PageName} Tabs={Tabs} />
			<MainBody>
				<FirstBody>
					<FirstBodyInfo>
						<Title>Sauti Marketplace</Title>
						<Paragraph1>
							Our mission is to empower women and families around the world,
							with equal business opportunity through culture.
						</Paragraph1>
						<Button variant="contained"> Leave Us Feedback </Button>
					</FirstBodyInfo>
					<img
						src={"https://source.unsplash.com/1600x900/?farm"}
						width={"500px"}
					/>
				</FirstBody>

				<SecondBody>
					<SecondBodyInfo>
						<img
							src={"https://source.unsplash.com/1280x720/?farm"}
							width={"500px"}
						/>
						<FirstBodyInfo>
							<h3>About Us</h3>
							<Paragraph2>
								{" "}
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at Hampden-Sydney College in Virginia, looked up
								one of the more obscure Latin words, consectetur, from a Lorem
								Ipsum passage, and going through the cites of the word in
								classical literature, discovered the undoubtable source. Lorem
								Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
								Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
								written in 45 BC. This book is a treatise on the theory of
								ethics, very popular during the Renaissance. The first line of
								Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
								in section 1.10.32.
							</Paragraph2>
						</FirstBodyInfo>
					</SecondBodyInfo>
				</SecondBody>
				<ThirdBody>
					<h3>Our Products</h3>
					<button>Livestock</button>
					<button>Roots and Tubers</button>
					<button>Fruits</button>
					<button>Vegetables</button>
				</ThirdBody>
			</MainBody>
		</>
	);
}

export default Home;
