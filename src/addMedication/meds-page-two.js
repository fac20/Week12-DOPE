/** @format */

import React from "react";
// import styled from "styled-components";
// import SelectTime from "./select-time";
import SetSpecificTime from "./SetSpecificTime";
import { Form, Label } from "./formStyle";
import styled from "styled-components";

const MedsPageTwo = ({ inputs, handleChange, page }) => {
	let timeArray = [...Array(+inputs.oftenFreq).keys()];
	return (
		<>
			<label for="progress"></label>
			<progress id="progress" value="66" max="100"></progress>
			<Label htmlFor="number">How many/much</Label>
			<NumberInput
				type="number"
				id="number"
				min="1"
				placeholder="e.g 3"
				name="amount"
				value={inputs.amount}
				onChange={handleChange}
			/>{" "}
			per dose
			<Label>How often</Label>
			<NumberInput
				type="number"
				min="0"
				placeholder="e.g 3"
				name="oftenFreq"
				value={inputs.oftenFreq}
				onChange={handleChange}
			/>
			<Label>
				a
				<SelectInput
					name="oftenUnit"
					value={inputs.oftenUnit}
					onChange={event => {
						handleChange(event);
					}}>
					<option value="day">day</option>
					<option value="week">week</option>
					<option value="month">month</option>
				</SelectInput>
			</Label>
			{/* <button>Set specific time/time of day</button> */}
			{/* {timeArray.map((x, i) => (
				<SelectTime
					key={i}
					id={i}
					handleChange={handleChange}
					inputs={inputs}
				/>
			))}  */}
			{timeArray.map(x => (
				<SetSpecificTime
					key={x}
					id={x + 1}
					handleChange={handleChange}
					inputs={inputs}
				/>
			))}
		</>
	);
};

export default MedsPageTwo;

const NumberInput = styled.input.attrs({ type: "number" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 10px;
`;

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
	color: black;
`;
