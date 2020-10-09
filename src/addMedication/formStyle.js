import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`;

export const Heading = styled.h1`
	font-size: 24px;
`;

export const Label = styled.label`
	font-size: 18px;
	margin: 10px;
`;

export const NameInput = styled.input.attrs({ type: "text" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 10px;
	min-width: 40%;
	height: 25px;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;

export const NumberInput = styled.input.attrs({ type: "number" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 10px;
	width: 50%;
	height: 25px;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;

export const TypeInput = styled.input.attrs({ type: "text" })`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 10px;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	visibility: hidden;
`;

export const Button = styled.button`
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
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;

export const SelectInput = styled.select`
	border-radius: 8px;
	background: #ffffff;
	border: 1px solid #828282;
	font-family: mosk;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.1px;
	color: #828282;
	margin: 10px 0 10px 10px;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;

export const TextArea = styled.textarea`
	border: 1px solid rgba(0, 0, 0, 0.15);
	box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	margin: 0 10px 10px 10px;
	width: 70%;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;
