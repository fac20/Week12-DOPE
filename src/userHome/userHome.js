/** @format */

import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { auth } from "../connection";
import { Link } from "react-router-dom";
import { db } from "../connection.js";
import { getAllMedicationDB } from "../utils/data-helpers";
import { MedicationDisplayData } from "./medication-display-data";
import DailyViewArray from "./DailyViewArray";
// Styled components
const Heading = styled.h1``;
const PillHeading = styled.h5`
	font-style: italic;
	color: #828282;
	font-weight: normal;
`;
const CalWrapper = styled.div``;
const PillWrapper = styled.div`
	background-color: rgba(255, 246, 246, 1);
	border: 1px solid #babfcd;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	width: 327px;
	height: 319px;
`;
const PillButton = styled.button`
	border: none;
	background-color: transparent;
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
		<>
			<Heading>
				Welcome, {auth().currentUser.displayName || auth().currentUser.email}!
			</Heading>

			<CalWrapper>
				<ul></ul>
			</CalWrapper>

			{medicationData ? (
				<DailyViewArray medicationData={medicationData} />
			) : (
				<div>
					<PillHeading>
						Currently empty. <br />
						Add your first medication below.
					</PillHeading>

					<PillWrapper>
						<Link to="/add-medication">
							<PillButton>
								<FaPlusCircle color="#458FE0" size="20px" />
							</PillButton>
						</Link>
					</PillWrapper>
				</div>
			)}
		</>
	);
}

export default UserHome;
