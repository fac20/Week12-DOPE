/** @format */

import React from "react";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { auth } from "../connection";

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

function UserHome() {
	return (
		<>
			<Heading>
				Welcome, {auth().currentUser.displayName || auth().currentUser.email}!
			</Heading>
			<CalWrapper>
				<ul>
					{/* <li></li>
					<li>{days} {dates - 1}</li>
					<li>{days} {dates}</li>
					<li></li>
					<li></li> */}
				</ul>
			</CalWrapper>

			<PillHeading>
				Currently empty. <br />
				Add your first medication below.
			</PillHeading>

			<PillWrapper>
				<PillButton onSubmit="">
					<FaPlusCircle color="#458FE0" size="20px" />
				</PillButton>
			</PillWrapper>
		</>
	);
}

export default UserHome;
