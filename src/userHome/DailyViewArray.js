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
			<>
				<h2>{timeHeader}</h2>
				{medInfo}
			</>
		);
	});
};

export default DailyViewArray;
