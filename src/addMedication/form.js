/** @format */

import React, { useEffect, useState } from "react";
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
	const [inputs, setInputs] = useState({ oftenFreq: 0 });
	const [page, setPage] = useState(1);

	const handleChange = event => {
		// const { name, value } = event.target;
		const target = event.target;
		const value = target.value;
		const name = target.name;
		setInputs({ ...inputs, [name]: value });
	};

	// The markup for the Step 1 UI
	return (
		<>
			<Form onSubmit={e => e.preventDefault()}>
				<h2>{page}/3</h2>

				{page === 1 && (
					<MedsPageOne
						handleChange={handleChange}
						inputs={inputs}
						page={page}
					/>
				)}

				{page === 2 && (
					<MedsPageTwo
						handleChange={handleChange}
						inputs={inputs}
						page={page}
					/>
				)}

				{page === 3 && (
					<MedsPageThree
						handleChange={handleChange}
						inputs={inputs}
						page={page}
					/>
				)}

				{page !== 1 && (
					<button onClick={() => setPage(page => page - 1)}>back</button>
				)}

				{page !== 3 && (
					<button onClick={() => setPage(page => page + 1)}>forward</button>
				)}

				{page === 3 && <button>Submit</button>}
			</Form>
		</>
	);
}

export default AddMedication;
