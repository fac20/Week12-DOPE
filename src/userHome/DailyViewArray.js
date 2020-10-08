import React from "react";
import { MedicationDisplayData } from "./medication-display-data";
import { timePoints } from "../utils/helper";
import styled from "styled-components";

const DailyViewArray = ({ medicationData }) => {
	let newTimeArray = timePoints(medicationData);
	return newTimeArray.map((timeObj, j) => {
		let timeHeader = Object.keys(timeObj).join("");
		let medInfoArray = Object.values(timeObj[timeHeader]);

		const medInfo = medInfoArray.map((medObj, i) => {
			return (
				<MedicationDisplayData
					key={i}
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
			<MedicationWrapper key={j}>
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
	width: 85%;
	margin: auto;
	border-radius: 16px;
	background: #facda3;
	padding: 2px 4px 2.5px;
`;

const Inner = styled.div`
	background: #fff6f6;
	background-size: 16px 16px;
	padding: 30px 20px 25px;
`;

const TimeHeader = styled.h2`
	text-align: left;
	border-bottom: 1px solid #babfcd;
	padding: 10px;
	margin-bottom: 0;
`;
