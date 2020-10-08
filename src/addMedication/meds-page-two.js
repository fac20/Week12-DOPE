/** @format */

import React from "react";
// import styled from "styled-components";
// import SelectTime from "./select-time";
import SetSpecificTime from "./SetSpecificTime";
import { Form, Label, NumberInput, SelectInput } from "./formStyle";
import styled from "styled-components";

const MedsPageTwo = ({ inputs, handleChange, page }) => {
	let timeArray = [...Array(+inputs.oftenFreq).keys()];
	return (
		<>
			<label htmlFor="progress"></label>
			<progress id="progress" value="66" max="100"></progress>
			<Label htmlFor="number">How many/much</Label>
			<Container>
				<NumberInput
					type="number"
					id="number"
					min="1"
					placeholder="e.g 3"
					name="amount"
					value={inputs.amount}
					onChange={handleChange}
					required
				/>{" "}
				per dose
			</Container>
			<Label>How often</Label>
			<Container>
				<NumberInput
					type="number"
					min="0"
					placeholder="e.g 3"
					name="oftenFreq"
					value={inputs.oftenFreq}
					onChange={handleChange}
					required
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
			</Container>
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

const Container = styled.div`
	display: flex;
	align-items: center;
`;
