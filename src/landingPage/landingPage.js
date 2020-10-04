/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../addMedication/formStyle";
import pillow from "../assets/pillow.svg";
import RightArrow from "../assets/rightarrow.png";
import styled from "styled-components";

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
`;

const Title = styled.h1`
	animation: color-change 6s infinite;
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
	margin-bottom: 50px;
`;

const HeadingThree = styled.h3`
	font-weight: bold;
	font-size: 24px;
`;

const HeadingFive = styled.h5`
	font-weight: normal;
	font-size: 16px;
	margin-bottom: 70px;
`;

const Text = styled.p`
	color: #001d84;
	font-size: 14px;
	font-style: normal;
	margin-left: 20px;
`;

const Arrow = styled.img`
	width: 15px;
	float: right;
	margin-right: 20px;
`;

function LandingPage() {
	return (
		<PageWrapper>
			<Title>PILLOW</Title>
			<img alt="pillow" src={pillow} width="230.34" height="260.34" />
			<HeadingThree>Worry less, live healthier.</HeadingThree>
			<HeadingFive>
				Monitor your medicine intake with our intuitive tracking app.{" "}
			</HeadingFive>
			<Link to="/signup">
				<Button>
					<Text>
						GET STARTED <Arrow alt="arrow" src={RightArrow}></Arrow>
					</Text>
				</Button>
			</Link>
		</PageWrapper>
	);
}

export default LandingPage;
