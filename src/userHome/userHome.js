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
	const [element, setElement] = React.useState();
	// const [newTimeArray, setNewTimeArray] = React.useState();

	React.useEffect(() => {
		getAllMedicationDB(auth().currentUser.email).then(result => {
			setMedicationData(result);
			// setNewTimeArray(timePoints(result));
		});
	}, []);

	const timePointCombiner = (objData, results) => {
		for (const prop in objData) {
			let match = prop.match(/\d+/);
			if (match) {
				let time_point = "time_point" + match[0];
				let hour = "hour" + match[0];
				let minute = "minute" + match[0];
				let ampm = "ampm" + match[0];
				let timePointObj = objData[time_point];
				let timePointString =
					timePointObj[hour] + timePointObj[minute] + timePointObj[ampm];

				results[timePointString] = {
					...results[timePointString],
					[objData.id]: {
						name: objData.name,
						strength: objData.strength,
						unit: objData.unit,
						amount: objData.amount,
						type: objData.type,
					},
				};
			}
		}
		return results;
	};

	function timePoints(fetchDataObj) {
		let result = {};
		fetchDataObj.forEach(x => {
			return timePointCombiner(x, result);
		});
		return Object.entries(result).map(e => {
			return { [e[0]]: e[1] };
		});
	}

	if (medicationData) {
		let newTimeArray = timePoints(medicationData);
		const dailyViewArray = newTimeArray.map(timeObj => {
			console.log(timeObj);
			let timeHeader = Object.keys(timeObj).join("");
			let medInfoArray = Object.values(timeObj[timeHeader]);
			const medInfo = medInfoArray.map(medObj => {
				return (
					<MedicationDisplayData
						name={medObj.name}
						strength={medObj.strength}
						unit={medObj.unit}
						type={medObj.type}
						amount={medObj.amount}></MedicationDisplayData>
				);
			});
			return (
				<>
					<h2>{timeHeader}</h2>
					{medInfo}
				</>
			);
		});
		return dailyViewArray;
	}
	// console.log(dailyViewArray)

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
				{/* {timeArray} */}
			</PillWrapper>

			{/* {medicationData ? { DailyViewArray } : null} */}
		</>
	);
}

export default UserHome;

// let medInfoArray = [];
// 	let timeArray = [];
// 	if (medicationData) {
// 		timeArray = medicationData.map(medObj => {
// 			console.log("run>");
// 			let timeString =
// 				medObj.time_point1.hour1 +
// 				medObj.time_point1.minute1 +
// 				medObj.time_point1.ampm1;
// 			console.log(timeString);
// 			return timeString;
// 		});

// 		medInfoArray = medicationData.map(medObj => {
// 			return (
// 				<MedicationDisplayData
// 					name={medObj.name}
// 					strength={medObj.strength}
// 					unit={medObj.unit}
// 					type={medObj.type}
// 					amount={medObj.amount}></MedicationDisplayData>
// 			);
// 		});

// 		console.log(timeArray);
// 	}

// 	if (medicationData) console.log(medicationData[0]);
