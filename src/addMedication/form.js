/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MedsPageOne } from "./meds-page-one";
import MedsPageTwo from "./meds-page-two";
import MedsPageThree from "./meds-page-three";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h1`
	font-size: 24px;
`;

const Label = styled.label`
	font-size: 18px;
`;

const TextInput = styled.input.attrs({ type: "text" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TypeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 1px solid red;
	/* visibility: hidden; */
`;

const TabletWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 93px;
	height: 93px;
	text-align: center;
`;

const LiquidWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 93px;
	height: 93px;
	text-align: center;
`;

const NeedleWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 93px;
	height: 93px;
	text-align: center;
`;

const Button = styled.button`
	font-size: 16px;
	font-weight: bold;
	font-style: italic;
	background: linear-gradient(180deg, #fdaf67 0%, #f7c649 100%);
	border-radius: 30px;
	border: none;
	width: 113px;
	height: 38px;
`;

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
