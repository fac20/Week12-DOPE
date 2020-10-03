/** @format */

import React from "react";
import { Button } from "../addMedication/formStyle";
import { signUp } from "../utils/user-management";

import styled from "styled-components";
// import { auth } from "../connection";
// import { Link } from "react-router-dom";

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

const Title = styled.h1`
	animation: color-change 6s infinite;
	text-align: center;
	font-weight: bolder;
	letter-spacing: 4px;
	@keyframes color-change {
		0% {
			color: #ff9b21;
		}
		50% {
			color: #001d84;
		}
		100% {
			color: #ff9b21;
		}
	}
`;

const HeadingThree = styled.h3`
	text-align: center;
	font-weight: bold;
	font-size: 24px;
`;

const HeadingFive = styled.h5`
	text-align: center;
	font-weight: normal;
	font-size: 16px;
`;

const Text = styled.p`
	color: #001d84;
	font-size: 14px;
	font-style: normal;
`;

function LandingPage() {
	return (
		<PageWrapper>
			<Title>PILLOW</Title>
			<div></div>
			<HeadingThree>Worry less, live healthier.</HeadingThree>
			<HeadingFive>
				Monitor your medicine intake with our intuitive tracking app.{" "}
			</HeadingFive>
			<Button type="button" onClick={signUp}>
				<Text>GET STARTED</Text>
			</Button>
		</PageWrapper>
	);
}

export default LandingPage;
