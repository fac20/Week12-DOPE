import styled from "styled-components";

export const Heading = styled.h1`
	font-size: 30px;
	margin-bottom: 50px;
`;

export const Button = styled.button`
	margin: ${props => (props.margin ? props.margin : null)};
	font-size: 14px;
	font-weight: bold;
	text-decoration: none;
	color: white;
	font-style: italic;
	background: #458fe0;
	box-shadow: 4px 5px #1f70c9;
	border-radius: 30px;
	border: none;
	overflow: hidden;
	width: 100px;
	height: 44px;
	z-index: 1;
	:hover {
		cursor: pointer;
		background: #3d75b3;
		box-shadow: 4px 5px #458fe0;
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;

export const Text = styled.div`
	display: inline-block;
	font-size: 15px;
`;

export const FlexDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;
