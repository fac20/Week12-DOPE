/** @format */

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { MedsPageOne } from "./meds-page-one";
import MedsPageTwo from "./meds-page-two";
import MedsPageThree from "./meds-page-three";
import { Form, Button } from "./formStyle";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { convertData } from "./../utils/helper";
import styled from "styled-components";

// import { Redirect } from "react-router-dom";
import {
	addMedicationDB,
	// getAllMedicationDB,
	// signUpDB
} from "./../utils/data-helpers";
import { auth } from "../connection";

/* ------- Form Components ------- */
function AddMedication() {
	// Add states here
	const history = useHistory();
	const [inputs, setInputs] = useState({
		oftenFreq: 0,
		unit: "mg",
		oftenUnit: "day",
		priority: "Low",
	});
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
		addMedicationDB(auth().currentUser.email, submitObj).then(() =>
			console.log("data was added"),
		);
		// redirect to landing page
		history.push("/medication-added");
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
				<ButtonWrapper>
					{page === 1 && (
						<Link to="/">
							<CancelArrow type="button">
								<img alt="" width="44px" src={leftArrow} />
							</CancelArrow>
						</Link>
					)}

					{page !== 1 && (
						<LeftArrow type="button" onClick={() => setPage(page => page - 1)}>
							<img alt="" width="44px" src={leftArrow} />
						</LeftArrow>
					)}

					{page !== 3 && (
						<RightArrow type="button" onClick={() => setPage(page => page + 1)}>
							<img alt="" width="44px" src={rightArrow} />
						</RightArrow>
					)}

					{page === 3 && <Button margin="0">Submit</Button>}
				</ButtonWrapper>
			</Form>
		</>
	);
}

export default AddMedication;

const LeftArrow = styled.button`
	cursor: pointer;
	border: none;
	background: transparent;
`;
const RightArrow = styled.button`
	cursor: pointer;
	border: none;
	background: transparent;
`;
const CancelArrow = styled.button`
	display: inline-block;
	border: none;
	background: transparent;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 2rem;
`;
