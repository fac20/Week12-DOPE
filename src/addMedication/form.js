/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import { MedsPageOne } from "./meds-page-one";
import MedsPageTwo from "./meds-page-two";
import MedsPageThree from "./meds-page-three";

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

function AddMedication() {
	// Add states here
	const [inputs, setInputs] = useState({
		supply: 0,
	});

	const handleChange = event => {
		const { name, value } = event.target;
		setInputs({ ...inputs, [name]: value });
	};

	// The markup for the Step 1 UI
	return (
		<Form onSubmit="">
			<h1> Page one</h1>
			<MedsPageOne />
			<h1> Page two</h1>
			<MedsPageTwo />
			<h1> Page three</h1>
			<MedsPageThree handleChange={handleChange} supply={inputs.supply} />

			<button>Submit</button>
		</Form>
	);
}

export default AddMedication;
