/** @format */

import React from "react";
import styled from "styled-components";
import { Label } from "./formStyle";

const MedsPageThree = ({ inputs, handleChange, page }) => {
	return (
		<>
			<label for="progress"></label>
			<progress id="progress" value="100" max="100">
				{" "}
				32%
			</progress>
			<Label>
				Priority:
				<select name="priority" value={inputs.priority} onChange={handleChange}>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</select>
			</Label>

			<Label>
				Additional Notes
				<TextArea
					name="notes"
					value={inputs.notes}
					onChange={handleChange}
					type="textarea"
				/>
			</Label>

			<Label>
				Current supply:
				<NumberInput
					type="number"
					min="0"
					placeholder="e.g 10"
					name="supply"
					value={inputs.supply}
					onChange={handleChange}></NumberInput>
			</Label>
		</>
	);
};

const TextArea = styled.textarea`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 0 10px 10px 10px;
	width: 70%;
`;

const NumberInput = styled.input`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 10px;
`;

// const SelectInput = styled.select`
// 	border-radius: 8px;
// 	background: #FFFFFF;
// 	border: 1px solid #828282;
// 	font-family: Montserrat;
// 	font-style: normal;
// 	font-weight: 500;
// 	font-size: 14px;
// 	line-height: 18px;
// 	letter-spacing: 0.1px;
// 	color: black;
// `;

export default MedsPageThree;
