/** @format */

import React from "react";
import styled from "styled-components";
import { Label } from "./formStyle";

const SetSpecificTime = ({ inputs, handleChange, id }) => {
	const ampmId = `ampm${id}`;
	const hourId = `hour${id}`;
	const minuteId = `minute${id}`;

	if (!inputs[ampmId]) inputs[ampmId] = "AM";

	if (!inputs[hourId]) inputs[hourId] = "00";

	if (!inputs[minuteId]) inputs[minuteId] = "00";

	return (
		<Label>
			Set Time
			<SelectInput
				name={ampmId}
				id="ampm"
				value={inputs[ampmId]}
				onChange={handleChange}>
				<option value="AM">AM</option>
				<option value="PM">PM</option>
			</SelectInput>
			<SelectInput
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
			</SelectInput>
			<SelectInput
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
			</SelectInput>
		</Label>
	);
};

const SelectInput = styled.select`
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #828282;
	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.1px;
	color: #828282;
	margin: 0 5px;
`;

export default SetSpecificTime;
