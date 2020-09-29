/** @format */

import React from "react";
import styled from "styled-components";

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

function AddMedication() {
	// Add states here

	// The markup for the Step 1 UI
	return (
		<Form onSubmit="">
			<h1>Add your medicine</h1>

			<label>
				Name of medicine
				<input name="text" type="text" value="" required />
			</label>

			<label>Type:</label>
			<input type="checkbox" id="tablet" name="tablet" value="" />
			<label for="tablet">Tablet</label>

			<input type="checkbox" id="liquid" name="liquid" value="" />
			<label for="liquid">Liquid</label>

			<input type="checkbox" id="needle" name="needle" value="" />
			<label for="needle">Needle</label>

			<label>
				Strength:
				<input name="text" type="text" value="" required />
			</label>

			<label for="unit">Unit:</label>
			<select name="unit" id="unit">
				<option value="mg">mg</option>
				<option value="ml">ml</option>
				<option value="g">g</option>
			</select>

			<button>Submit</button>
		</Form>
	);
}

export default AddMedication;
