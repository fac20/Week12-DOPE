/** @format */

import React from "react";

const SetSpecificTime = ({ inputs, handleChange, id }) => {
	const ampmId = `ampm${id}`;
	const hourId = `hour${id}`;
	const minuteId = `minute${id}`;

	if (!inputs[ampmId]) inputs[ampmId] = "AM";

	if (!inputs[hourId]) inputs[hourId] = "00";

	if (!inputs[minuteId]) inputs[minuteId] = "00";

	return (
		<label>
			Set Time
			<select
				name={ampmId}
				id="ampm"
				value={inputs[ampmId]}
				onChange={handleChange}>
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</select>
			<select
				name={hourId}
				id="hour"
				value={inputs[hourId]}
				onChange={handleChange}>
				<option value="00">00</option>
				<option value="01">01</option>
				<option value="02">02</option>
				<option value="03">03</option>
				<option value="04">04</option>
				<option value="05">05</option>
				<option value="06">06</option>
				<option value="07">07</option>
				<option value="08">08</option>
				<option value="09">09</option>
				<option value="10">10</option>
				<option value="11">11</option>
			</select>
			<select
				name={minuteId}
				id="minute"
				value={inputs[minuteId]}
				onChange={handleChange}>
				<option value="00">00</option>
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="40">40</option>
				<option value="50">50</option>
			</select>
		</label>
	);
};

export default SetSpecificTime;
