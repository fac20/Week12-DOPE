/** @format */

import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { auth } from "../connection";
import { Link } from "react-router-dom";
import { db } from "../connection.js";
import { getAllMedicationDB } from "../utils/data-helpers";
import { MedicationDisplayData } from "./medication-display-data";
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

// return a h1
// return a calender with todays date, highlight/add css for current date
// return the medication detail view with if statement. IF no data is fetched, render empty box and an add medication button
// if data is fetched then return data and add medication button

// Calendar
// let day = new Date();
// let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// let result = daysOfWeek[day.getDay()] + " " + day.getDate();
// let days = daysOfWeek[day.getDay()];
// let dates = day.getDate();
// const logRes = days.filter(x => {
// });
// depending on current day, we want 5 in total, 2 on either side

// userHome does fetch request for meds
// map through data to get timepoints to create and append
// put med data under the timepoints

function UserHome() {
	const [medicationData, setMedicationData] = React.useState();
	const [element, setElement] = React.useState("li");

	React.useEffect(() => {
		getAllMedicationDB(auth().currentUser.email).then(result => {
			setMedicationData(result);
		});
	}, []);

	let medInfoArray = [];
	let timeArray = [];
	if (medicationData) {
		timeArray = medicationData.map(medObj => {
			console.log("run>");
			let timeString =
				medObj.time_point1.hour1 +
				medObj.time_point1.minute1 +
				medObj.time_point1.ampm1;
			console.log(timeString);
			return timeString;
		});

		medInfoArray = medicationData.map(medObj => {
			return (
				<MedicationDisplayData
					name={medObj.name}
					strength={medObj.strength}
					unit={medObj.unit}
					type={medObj.type}
					amount={medObj.amount}></MedicationDisplayData>
			);
		});

		console.log(timeArray);
	}

	if (medicationData) console.log(medicationData[0]);

	return (
		<>
			<Heading>
				Welcome, {auth().currentUser.displayName || auth().currentUser.email}!
			</Heading>
			<CalWrapper>
				<ul></ul>
			</CalWrapper>

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
				{timeArray}
			</PillWrapper>

			{medInfoArray}
		</>
	);
}

export default UserHome;

let nb8ANnKLU2cuglrPnx86 = {
	supply: "50",
	time_point1: {
		hour1: "08",
		minute1: "00",
		ampm1: "AM",
	},
	time_point2: {
		ampm2: "PM",
		hour2: "08",
		minute2: "30",
	},
	priority: "Low",
	oftenUnit: "day",
	unit: "mg",
	name: "paracetamol",
	description: "white round tablet",
	notes: "Drink lots of water!",
	oftenFreq: "2",
	type: "liquid",
	strength: "200",
	amount: "2",
	id: "nb8ANnKLU2cuglrPnx86",
};
