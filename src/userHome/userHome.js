/** @format */

import React from "react";
import styled from "styled-components";

const Heading = styled.h1``;
let day = new Date();
console.log(day);
let daysOfWeek = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
console.log(daysOfWeek[day.getDay()], day.getDate());
function UserHome() {
	const username = "Amy";
	return (
		<>
			<Heading>Welcome {username}</Heading>
		</>
	);
	// return a h1
	// return a calender with todays date, highlight/add css for current date
	// return the medication detail view with if statement. IF no data is fetched, render empty box and an add medication button
	// if data is fetched then return data and add medication button
}

export default UserHome;
