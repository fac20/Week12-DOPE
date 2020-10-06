/** @format */

import React from "react";
import styled from "styled-components";
import { FaPlusCircle, FaPlus } from "react-icons/fa";
import { auth } from "../connection";
import { Link } from "react-router-dom";
import { db } from "../connection.js";
import { getAllMedicationDB } from "../utils/data-helpers";
import { MedicationDisplayData } from "./medication-display-data";
import DailyViewArray from "./DailyViewArray";
import { Heading, Button, Text, FlexDiv } from "./userHomeStyle";
import { signOut } from "./../utils/user-management";
// Styled components

const PillHeading = styled.h5`
	font-style: italic;
	color: #828282;
	font-weight: normal;
`;

const PillWrapper = styled.div`
	background-color: rgba(255, 246, 246, 1);
	border: 1px solid #babfcd;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	width: 327px;
	height: 319px;
`;

function UserHome() {
	const [medicationData, setMedicationData] = React.useState();

	React.useEffect(() => {
		getAllMedicationDB(auth().currentUser.email).then(result => {
			setMedicationData(result);
			console.log(result);
		});
	}, []);

	return (
		<HomeWrapper>
			<Heading>
				Welcome, here's your view for the day!
				{/* {auth().currentUser.displayName || auth().currentUser.email} */}
			</Heading>

			{/* <CalWrapper>
				<ul></ul>
			</CalWrapper> */}

			{medicationData && medicationData.length ? (
				<div>
					<Button margin="10px auto" onClick={signOut}>
						SIGN OUT{" "}
					</Button>
					<Link to="/add-medication">
						<Button margin="10px">
							<FlexDiv>
								<FaPlus color="#FFFFFF" size="30px" />
								<Text>Add</Text>
							</FlexDiv>
						</Button>
					</Link>
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
							<FlexDiv>
								<Button margin="10px">
									<FaPlus color="#FFFFFF" size="30px" />
									<Text>Add</Text>
								</Button>
							</FlexDiv>
						</Link>
					</PillWrapper>
				</div>
			)}
		</HomeWrapper>
	);
}

export default UserHome;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: auto;
	text-align: center;
`;
