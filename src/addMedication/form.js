/** @format */

import React, { useEffect, useState } from "react";
import { MedsPageOne } from "./meds-page-one";
import MedsPageTwo from "./meds-page-two";
import MedsPageThree from "./meds-page-three";
import { Form, Button } from "./formstyle";
import convertData from "./../utils/helper";
import {
	signUpDB,
	addMedicationDB,
	getAllMedicationDB,
} from "./../utils/data-helpers";

/* ------- Form Components ------- */

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
	// adding medication to an already logged in person/ signed up
	const submitData = event => {
		event.preventDefault();
		// convert the inputs object to the obj to send to db
		const submitObj = convertData(inputs);
		// send new obj to db with username...
		addMedicationDB("amy", submitObj).then(() => console.log("data was added"));

		// redirect to landing page
	};
	// The markup for the Step 1 UI
	return (
		<>
			<Form onSubmit={submitData}>
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
					<button type="button" onClick={() => setPage(page => page - 1)}>
						back
					</button>
				)}

				{page !== 3 && (
					<button type="button" onClick={() => setPage(page => page + 1)}>
						forward
					</button>
				)}

				{page === 3 && <Button>Submit</Button>}
			</Form>
		</>
	);
}

export default AddMedication;
