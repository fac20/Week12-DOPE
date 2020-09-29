/** @format */

import React from "react";
import styled from "styled-components";

const MedsPageThree = ({ inputs, handleChange }) => {
	return (
		<>
			<label>
				Priority:
				<select name="priority" value={inputs.priority} onChange={handleChange}>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</select>
			</label>

			<label>
				Additional Notes
				<textarea
					name="notes"
					value={inputs.notes}
					onChange={handleChange}
					type="textarea"
				/>
			</label>

			<label>
				Current supply:
				<input
					type="number"
					min="0"
					placeholder="e.g 10"
					name="supply"
					value={inputs.supply}
					onChange={handleChange}></input>
			</label>
		</>
	);
};

export default MedsPageThree;
