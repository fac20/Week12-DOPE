/** @format */

import React from "react";
import { MedicationDisplayData } from "./medication-display-data";
import { timePoints } from "../utils/helper";

const DailyViewArray = ({ medicationData }) => {
	let newTimeArray = timePoints(medicationData);

	return newTimeArray.map(timeObj => {
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
};

export default DailyViewArray;
