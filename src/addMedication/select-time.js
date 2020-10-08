import React from "react";

const SelectTime = ({ inputs, handleChange, id }) => {
	const beforeAfterId = `beforeAfter${id}`;
	const timeOfDayId = `timeOfDay${id}`;

	return (
		<label>
			Set time
			<select
				name={beforeAfterId}
				value={inputs[beforeAfterId] || "before"}
				onChange={handleChange}>
				<option value="before">before</option>
				<option value="after">after</option>
			</select>
			<select
				name={timeOfDayId}
				value={inputs[timeOfDayId] || "breakfast"}
				onChange={handleChange}>
				<option value="breakfast">breakfast</option>
				<option value="lunch">lunch</option>
				<option value="dinner">dinner</option>
			</select>
		</label>
	);
};
export default SelectTime;
