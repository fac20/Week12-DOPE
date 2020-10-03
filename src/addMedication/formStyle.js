/** @format */

import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Heading = styled.h1`
	font-size: 24px;
`;

export const Label = styled.label`
	font-size: 18px;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TypeWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	border: 1px solid red;
	/* visibility: hidden; */
`;

export const TabletWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 93px;
	height: 93px;
	text-align: center;
`;

export const LiquidWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 93px;
	height: 93px;
	text-align: center;
`;

export const NeedleWrapper = styled.div`
	background: #fff6f6;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	width: 93px;
	height: 93px;
	text-align: center;
`;

export const Button = styled.button`
	font-size: 14px;
	font-weight: bold;
	font-style: italic;
	background: linear-gradient(180deg, #fdaf67 0%, #f7c649 100%);
	border-radius: 30px;
	border: none;
	width: 305px;
	height: 44px;
	align-self: center;
	overflow: hidden;
	z-index: 1;
	outline: none;
	:hover {
		cursor: pointer;
		background: linear-gradient(180deg, #f7c649 0%, #fdaf67 100%);
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;
