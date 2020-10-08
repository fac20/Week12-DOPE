import React from "react";
import styled from "styled-components";
import errorImage from "../assets/cow.gif";
import { Link } from "react-router-dom";
const ImageWrapper = styled.div`
	text-align: center;
`;

const Heading = styled.h1`
	text-align: center;
`;

const HeadingThree = styled.h3`
	text-align: center;
`;

const ButtonWrapper = styled.div`
	text-align: center;
`;

const Button = styled.button`
	cursor: pointer;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	font-weight: bold;
	border-radius: 30px;
	margin: 1em;
	padding: 1em 2em;
	border: none;
	position: relative;
	z-index: 1;
	background: #1c3077;
	color: #ffff;
	-webkit-transition: background-color 0.3s, color 0.3s;
	transition: background-color 0.3s, color 0.3s;
	/* this will create the orange border that appears on hover*/
	&:before {
		content: "";
		position: absolute; /*makes the content fit vertically within the button*/
		top: 0; /*keeps content within button during hover*/
		left: 0;
		width: 98%; /*makes the orange borders cover the button*/
		height: 90%;
		border: 2px solid #1c3077;
		z-index: -1;
		border-radius: inherit;
		opacity: 0;
		-webkit-transform: scale3d(0.6, 0.6, 1);
		transform: scale3d(0.6, 0.6, 1);
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
		transition: transform 0.3s, opacity 0.3s;
		box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.4),
			inset -2px -2px 2px rgba(0, 0, 0, 0.4);
	}
	&:hover {
		background-color: #fcc271;
		color: #1c3077;
		box-shadow: 0px 15px 20px hsla(33, 98%, 50%, 0.2) inset;
	}
	&:hover:before {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
		opacity: 1;
	}
	&:active {
		top: 2px;
		left: 4px;
		box-shadow: inset 5px 5px 5px grey,
			inset -1px -1px 1px rgba(255, 255, 255, 0.4);
	}
`;

function PageNotFound() {
	return (
		<>
			<ImageWrapper>
				<img alt="404" src={errorImage} height="400"></img>
			</ImageWrapper>
			<Heading>Uh Oh... </Heading>
			<HeadingThree>Looks like this page doesn't exist.</HeadingThree>
			<Link to="/home">
				<ButtonWrapper>
					<Button> Go back home</Button>
				</ButtonWrapper>
			</Link>
		</>
	);
}

export default PageNotFound;
