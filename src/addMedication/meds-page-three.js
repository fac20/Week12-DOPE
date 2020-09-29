/** @format */

import React from "react";
import styled from "styled-components";

const MedsPageThree = props => {
	return (
		<>
			<label>
				Priority:
				<select>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</select>
			</label>

			<label>
				Additional Notes
				<textarea
					value={props.notes}
					onChange={props.handleChange}
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
					value={props.supply}
					onChange={props.handleChange}></input>
			</label>
		</>
	);
};

export default MedsPageThree;
