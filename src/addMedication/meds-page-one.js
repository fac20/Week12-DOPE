import React from "react";
import {
	Form,
	Heading,
	Label,
	NameInput,
	HiddenCheckbox,
	NumberInput,
	SelectInput,
	TextArea,
} from "./formStyle";
import styled from "styled-components";
import tabletPic from "../assets/typePill.png";
import liquidPic from "../assets/typeLiquid.png";
import needlePic from "../assets/typeNeedle.png";

const MedsPageOne = ({ inputs, handleChange, page }) => {
	return (
		<>
			<label htmlFor="progress"></label>
			<progress
				style={{ color: "red" }}
				id="progress"
				value="33"
				max="100"></progress>
			<Heading>Add your medicine</Heading>
			<Label htmlFor="name">Name of medicine</Label>
			<NameInput
				id="name"
				name="name"
				type="text"
				placeholder="e.g. aspirin"
				value={inputs.name}
				onChange={handleChange}
				required
			/>

			<Label htmlFor="type">Type</Label>

			<TypeWrapper>
				<MedsWrapper>
					<input
						type="radio"
						id="tablet"
						name="type"
						value="tablet"
						checked={inputs.type === "tablet"}
						onChange={handleChange}
					/>
					<LabelArea htmlFor="tablet">Tablet</LabelArea>
					<img alt="" width="50" src={tabletPic} />
				</MedsWrapper>

				<MedsWrapper>
					<input
						type="radio"
						id="liquid"
						name="type"
						value="liquid"
						checked={inputs.type === "liquid"}
						onChange={handleChange}
					/>
					<LabelArea htmlFor="liquid">Liquid</LabelArea>
					<img alt="" width="50" src={liquidPic} />
				</MedsWrapper>

				<MedsWrapper>
					<input
						type="radio"
						id="needle"
						name="type"
						value="needle"
						checked={inputs.type === "needle"}
						onChange={handleChange}
					/>
					<LabelArea htmlFor="needle">Needle</LabelArea>
					<img alt="" width="50" src={needlePic} />
				</MedsWrapper>
			</TypeWrapper>

			<Label htmlFor="strength">Strength</Label>
			<StrengthWrapper>
				<NumberInput
					id="strength"
					name="strength"
					type="number"
					placeholder="e.g. 30"
					value={inputs.strength}
					onChange={handleChange}
					required
				/>
				<SelectInput
					aria-label="input unit"
					name="unit"
					id="unit"
					value={inputs.unit}
					onChange={handleChange}>
					<option value="mg">mg</option>
					<option value="ml">ml</option>
					<option value="g">g</option>
				</SelectInput>
			</StrengthWrapper>

			<Label htmlFor="description">Description</Label>
			<TextArea
				id="description"
				type="textarea"
				name="description"
				placeholder="e.g. white round tablet"
				value={inputs.description}
				onChange={handleChange}
			/>
		</>
	);
};

export { MedsPageOne };

/* additional styles for page 1 */

const StrengthWrapper = styled.div`
	display: flex;
`;

const MedsWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 5rem;
	/* height: 2rem; */
	text-align: center;
	&:active {
		-webkit-box-shadow: inset 1px 1px 10px #ecdede;
		-moz-box-shadow: inset 1px 1px 10px #ecdede;
		box-shadow: inset 1px 1px 10px #ecdede;
	}
	margin: auto;
	position: relative;
`;

const TypeWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	margin: 10px;
`;

const LabelArea = styled.label`
	font-size: 18px;
	margin: 10px;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
`;
