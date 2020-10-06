/** @format */

import React from "react";
import { MedicationDisplayData } from "./medication-display-data";
import { timePoints } from "../utils/helper";
import styled from "styled-components";

const DailyViewArray = ({ medicationData }) => {
	// [{"0800AM"},{"0830PM"},{"0100AM"},{"1000AM"}] need to sort in order

	let newTimeArray = timePoints(medicationData);
	console.log(newTimeArray);
	console.log(Object.values(newTimeArray));
	return newTimeArray.map(timeObj => {
		let timeHeader = Object.keys(timeObj).join("");
		let medInfoArray = Object.values(timeObj[timeHeader]);

		const medInfo = medInfoArray.map((medObj, i) => {
			console.log("hey", medObj);
			return (
				<MedicationDisplayData
					name={medObj.name}
					strength={medObj.strength}
					unit={medObj.unit}
					type={medObj.type}
					amount={medObj.amount}
					id={medObj.id}
					time_point={medObj.time_point}
					taken={medObj.taken}></MedicationDisplayData>
			);
		});

		return (
			<MedicationWrapper>
				<Inner>
					<TimeHeader>{timeHeader}</TimeHeader>
					{medInfo}
				</Inner>
			</MedicationWrapper>
		);
	});
};

export default DailyViewArray;

const MedicationWrapper = styled.div`
	width: 50%;
	margin: auto;
	border-radius: 16px;
	background: #069fdf;
	/* #f7c649 */
	padding: 2px 4px 2.5px;
`;

const Inner = styled.div`
	background: linear-gradient(90deg, white 15px, transparent 1%) center,
		linear-gradient(white 15px, transparent 1%) center, #ccc;
	background-size: 16px 16px;
	padding: 30px 20px 25px;
`;

const TimeHeader = styled.h2`
	text-align: left;
	border-bottom: 1px solid #babfcd;
	padding: 10px;
	margin-bottom: 0;
`;
