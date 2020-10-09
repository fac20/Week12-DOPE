import React, { useState } from "react";
import { auth } from "../connection";
import { Link, useHistory } from "react-router-dom";
import { MedsPageOne } from "./meds-page-one";
import MedsPageTwo from "./meds-page-two";
import MedsPageThree from "./meds-page-three";
import { Form } from "./formStyle";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import { convertData } from "./../utils/helper";
import styled from "styled-components";
import { addMedicationDB } from "./../utils/data-helpers";

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
		addMedicationDB(auth().currentUser.email, submitObj);
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

					{page === 3 && <SubmitButton margin="0">Submit</SubmitButton>}
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

const SubmitButton = styled.button`
	margin: ${props => (props.margin ? props.margin : null)};
	font-size: 14px;
	font-weight: bold;
	background: linear-gradient(180deg, #fdaf67 0%, #f7c649 100%);
	border-radius: 30px;
	border: none;
	width: 150px;
	height: 44px;
	align-self: center;
	overflow: hidden;
	z-index: 1;
	outline: none;
	:hover {
		cursor: pointer;
		background: linear-gradient(180deg, #f7c649 0%, #fdaf67 100%);
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
	transform: translate3d(0, 0, 0);
	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
`;
