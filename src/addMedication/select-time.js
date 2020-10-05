/** @format */

import React from "react";

const SelectTime = ({ inputs, handleChange, id }) => {
	const beforeAfterId = `beforeAfter${id}`;
	const timeOfDayId = `timeOfDay${id}`;

	if (!inputs[beforeAfterId]) inputs[beforeAfterId] = "before";

	if (!inputs[timeOfDayId]) inputs[timeOfDayId] = "breakfast";

	return (
		<label>
			Set time
			<select
				name={beforeAfterId}
				value={inputs[beforeAfterId]}
				onChange={handleChange}>
				<option value="before">before</option>
				<option value="after">after</option>
			</select>
			<select
				name={timeOfDayId}
				value={inputs[timeOfDayId]}
				onChange={handleChange}>
				<option value="breakfast">breakfast</option>
				<option value="lunch">lunch</option>
				<option value="dinner">dinner</option>
			</select>
		</label>
	);
};
export default SelectTime;
