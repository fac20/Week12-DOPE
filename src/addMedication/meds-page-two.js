import React from "react";
import SetSpecificTime from "./SetSpecificTime";
import { Label, NumberInput, SelectInput } from "./formStyle";
import styled from "styled-components";
import { ProgressBar } from "./meds-page-one";

const MedsPageTwo = ({ inputs, handleChange, page }) => {
	let timeArray = [...Array(+inputs.oftenFreq).keys()];
	return (
		<>
			<label htmlFor="progress"></label>
			<ProgressBar id="progress" value="66" max="100"></ProgressBar>
			<Label htmlFor="number">Amount</Label>
			<Container>
				<FrequencyInput
					type="number"
					id="number"
					min="1"
					placeholder="e.g 3"
					name="amount"
					value={inputs.amount}
					onChange={handleChange}
					required
				/>{" "}
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
	margin-bottom: 10px;
`;

const FrequencyInput = styled.input.attrs({ type: "number" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: auto;
	width: 50%;
	height: 25px;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;
