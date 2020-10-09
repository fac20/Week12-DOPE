import React from "react";
import styled from "styled-components";
import {
	Heading,
	Label,
	NameInput,
	NumberInput,
	SelectInput,
	TextArea,
} from "./formStyle";
import tabletPic from "../assets/typePill.png";
import liquidPic from "../assets/typeLiquid.png";
import needlePic from "../assets/typeNeedle.png";

const MedsPageOne = ({ inputs, handleChange, page }) => {
	return (
		<>
			<label htmlFor="progress"></label>
			<ProgressBar id="progress" value="33" max="100"></ProgressBar>
			<Heading>Add your medicine</Heading>
			<Label htmlFor="name">Name</Label>
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

export const ProgressBar = styled.progress`
	box-shadow: 5px 0px 15px 0px #3798d9;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	height: 12px;
	background-color: #3798d9;
	border-radius: 60px;
	box-shadow: 0 1px 0px 0 #3798d9;
	padding: 2px;
	display: block;
	margin-bottom: 10px;
	::-webkit-progress-bar {
		background: white;
		border-radius: 60px;
	}
	::-moz-progress-bar {
		background: -moz-linear-gradient(
				45deg,
				transparent,
				transparent 33%,
				rgba(0, 0, 0, 0.1) 33%,
				rgba(0, 0, 0, 0.1) 66%,
				transparent 66%
			),
			-moz-linear-gradient(top, #3798d9, #3798d9),
			-moz-linear-gradient(left, #3798d9, #3798d9);
		background-size: 25px 14px, 100% 100%, 100% 100%;
	}
	::-webkit-progress-value {
		background: -webkit-linear-gradient(
				45deg,
				transparent,
				transparent 33%,
				#3798d9 33%,
				#3798d9 66%,
				transparent 66%
			),
			-webkit-linear-gradient(top, #3798d9, #3798d9),
			-webkit-linear-gradient(left, #3798d9, #3798d9);
		background-color: white;
		background-size: 25px 14px, 100% 100%, 100% 100%;
	}
	::-ms-fill {
		background: repeating-linear-gradient(
			45deg,
			#3798d9,
			#3798d9 10px,
			#3798d9 10px,
			#3798d9 20px
		);
	}
`;

const StrengthWrapper = styled.div`
	display: flex;
	margin-left: 40px;
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
