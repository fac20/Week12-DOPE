/** @format */

import React from "react";
import styled from "styled-components";

/* ------- Styled Components (JSX CSS) ------- */

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

	// The markup for the Step 1 UI
	return (
		<Form>
			<Heading>Add your medicine</Heading>

			<Label>Name of medicine</Label>
			<TextInput name="text" type="text" required />

			<Label>Type</Label>
			<TypeWrapper>
				<TabletWrapper>
					<Label htmlFor="tablet">Tablet</Label>
					<HiddenCheckbox type="checkbox" id="tablet" name="tablet" />
				</TabletWrapper>

				<LiquidWrapper>
					<Label htmlFor="liquid">Liquid</Label>
					<HiddenCheckbox type="checkbox" id="liquid" name="liquid" />
				</LiquidWrapper>

				<NeedleWrapper>
					<Label htmlFor="needle">Needle</Label>
					<HiddenCheckbox type="checkbox" id="needle" name="needle" />
				</NeedleWrapper>
			</TypeWrapper>

			<Label>Strength</Label>
			<TextInput name="text" type="text" required />

			<Label htmlFor="unit">Unit</Label>
			<select name="unit" id="unit">
				<option value="mg">mg</option>
				<option value="ml">ml</option>
				<option value="g">g</option>
			</select>

			<Label>Description</Label>
			<TextInput name="text" type="text" required />

			<Button>Submit</Button>
		</Form>
	);
}

export default AddMedication;
