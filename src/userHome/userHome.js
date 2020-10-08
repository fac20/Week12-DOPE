/** @format */

import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { auth } from "../connection";
import { Link } from "react-router-dom";
import { db } from "../connection.js";
import { getAllMedicationDB } from "../utils/data-helpers";
import { MedicationDisplayData } from "./medication-display-data";
import DailyViewArray from "./DailyViewArray";
import { Heading, Button, Text, FlexDiv } from "./userHomeStyle";
import { signOut } from "./../utils/user-management";

function UserHome() {
	const [medicationData, setMedicationData] = React.useState();

	React.useEffect(() => {
		getAllMedicationDB(auth().currentUser.email).then(result => {
			setMedicationData(result);
			console.log(result);
		});
	}, []);

	const today = new Date().toLocaleDateString("en-US", {
		day: "2-digit",
		weekday: "short",
	});

	return (
		<HomeWrapper>
			<Heading>
				Welcome, here's your view for the day!
				{/* {auth().currentUser.displayName || auth().currentUser.email} */}
			</Heading>
			{medicationData && medicationData.length ? (
				<div>
					<ButtonDiv>
						<Link to="/add-medication">
							<Button>
								<FlexDiv>
									<FaPlus color="#FFFFFF" size="25px" />
									<Text>Add</Text>
								</FlexDiv>
							</Button>
						</Link>
						<Link to="/search">
							<Button>
								{/* <FlexDiv> */}
								<Text>NHS Meds Info</Text>
								{/* </FlexDiv> */}
							</Button>
						</Link>

						<SignOutButton margin="10px auto" onClick={signOut}>
							SIGN OUT{" "}
						</SignOutButton>
					</ButtonDiv>
					{/* <img alt="pencil" width="50" style={{"float": "left"}} src="https://img.icons8.com/emoji/96/000000/pencil-emoji.png"/> */}
					<DateWrapper>
						<DateStyled>{today}</DateStyled>
					</DateWrapper>
					<DailyViewArray medicationData={medicationData} />
				</div>
			) : (
				<div>
					<PillHeading>
						Currently empty. <br />
						Add your first medication below.
					</PillHeading>

					<PillWrapper>
						<Link to="/add-medication">
							<Button style={{ "margin-top": "100px" }}>
								<FlexDiv>
									<FaPlus color="#FFFFFF" size="25px" />
									<Text>Add </Text>
								</FlexDiv>
							</Button>
						</Link>
					</PillWrapper>
				</div>
			)}
		</HomeWrapper>
	);
}

export default UserHome;

// Styled components

const PillHeading = styled.h5`
	font-style: italic;
	color: #828282;
	font-weight: normal;
`;

const PillWrapper = styled.div`
	background: #fff6f6;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	border: 1px solid #babfcd;
	margin: auto;
	width: 327px;
	height: 319px;
`;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: auto;
	text-align: center;
`;

const SignOutButton = styled.button`
	box-shadow: 4px 5px #ea8324;
	color: #001d84;
	font-family: "DM Sans", sans-serif;
	font-size: 15px;
	font-weight: bolder;
	font-style: italic;
	background: linear-gradient(180deg, #fdaf67 0%, #f7c649 100%);
	border-radius: 30px;
	border: none;
	width: 150px;
	height: 44px;
	align-self: center;
	overflow: hidden;
	z-index: 1;
	outline: none;
	:hover {
		cursor: pointer;
		box-shadow: 4px 5px #f7c649;
		background: linear-gradient(180deg, #f7c649 0%, #ea8324 100%);
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 30px;
`;

const DateStyled = styled.h2`
	font-family: "DM Sans", sans-serif;
	text-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);

	font-size: 16px;
	font-weight: bolder;
	width: fit-content;
	margin: 40px auto;
	box-shadow: 0 5px 15px rgb(57, 168, 228);
	padding: 10px;
	padding-left: 3em;
	padding-right: 3em;
	color: white;
	border-radius: 5px;
	background-image: linear-gradient(135deg, #8d8dd4, #45ced4);
	&:hover {
		transition: box-shadow 0.5s;
		box-shadow: 0 8px 25px rgb(57, 168, 228);
	}
`;

const DateWrapper = styled.div``;
