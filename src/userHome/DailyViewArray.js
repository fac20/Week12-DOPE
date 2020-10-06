/** @format */

import React from "react";
import { MedicationDisplayData } from "./medication-display-data";
import { timePoints } from "../utils/helper";

const DailyViewArray = ({ medicationData }) => {
	// [{"0800AM"},{"0830PM"},{"0100AM"},{"1000AM"}] need to sort in order

	let newTimeArray = timePoints(medicationData);
	console.log(newTimeArray);
	console.log(Object.values(newTimeArray));
	return newTimeArray.map(timeObj => {
		let timeHeader = Object.keys(timeObj).join("");
		let medInfoArray = Object.values(timeObj[timeHeader]);

		// myArray.sort((a, b) => a - b);

		const medInfo = medInfoArray.map((medObj, i) => {
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
};

export default DailyViewArray;
