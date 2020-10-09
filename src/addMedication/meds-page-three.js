import React from "react";
import { Label, NumberInput, SelectInput, TextArea } from "./formStyle";
import { ProgressBar } from "./meds-page-one";

const MedsPageThree = ({ inputs, handleChange, page }) => {
	return (
		<>
			<label htmlFor="progress"></label>
			<ProgressBar id="progress" value="100" max="100">
				{" "}
				32%
			</ProgressBar>
			<Label>
				Priority
				<SelectInput
					name="priority"
					value={inputs.priority}
					onChange={handleChange}>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</SelectInput>
			</Label>

			<Label htmlFor="notes">Additional Notes</Label>
			<TextArea
				id="notes"
				name="notes"
				placeholder="e.g. take it 30 minutes after your meal"
				value={inputs.notes}
				onChange={handleChange}
				type="textarea"
			/>

			<Label htmlFor="current">Current supply</Label>
			<NumberInput
				id="current"
				type="number"
				min="0"
				placeholder="e.g. 10"
				name="supply"
				value={inputs.supply}
				onChange={handleChange}></NumberInput>
		</>
	);
};

export default MedsPageThree;
