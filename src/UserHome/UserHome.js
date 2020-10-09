import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { auth } from "../connection";
import { Link } from "react-router-dom";
import { getAllMedicationDB } from "../utils/data-helpers";
import DailyViewArray from "./DailyViewArray";
import { Heading, Button, Text, FlexDiv } from "./UserHomeStyle";
import { signOut } from "./../utils/user-management";
import wave from "./../assets/wave.svg";

function UserHome() {
	const [medicationData, setMedicationData] = React.useState();

	React.useEffect(() => {
		getAllMedicationDB(auth().currentUser.email).then(result => {
			setMedicationData(result);
		});
	}, []);

	const today = new Date().toLocaleDateString("en-US", {
		day: "2-digit",
		weekday: "short",
	});

	return (
		<HomeWrapper>
			<Wave alt="" src={wave} />
			<Heading>
				Welcome {auth().currentUser.displayName || auth().currentUser.email},
				here's your view for the day! 👋
			</Heading>
			<ButtonDiv>
				<Link to="/add-medication">
					<AddButton type="button">
						<FlexDiv>
							<FaPlus color="#FFFFFF" size="25px" />
						</FlexDiv>
					</AddButton>
				</Link>
				<Link to="/search">
					<Button type="button" style={{ marginLeft: "10px" }}>
						<Text>Med Info</Text>
					</Button>
				</Link>

				<SignOutButton style={{ marginLeft: "10px" }} onClick={signOut}>
					Sign Out{" "}
				</SignOutButton>
			</ButtonDiv>
			<DateWrapper>
				<DateStyled>{today}</DateStyled>
			</DateWrapper>
			{medicationData && medicationData.length ? (
				<div>
					<DailyViewArray medicationData={medicationData} />
				</div>
			) : (
				<div>
					<PillHeading>
						Currently empty. <br />
						Add your first medication below.
					</PillHeading>

					<PillWrapper>
						<Link to="/add-medication">
							<Button margin={"10px 0 0 0"}>
								<FlexDiv>
									<FaPlus color="#FFFFFF" size="25px" />
									<Text>Add </Text>
								</FlexDiv>
							</Button>
						</Link>
					</PillWrapper>
				</div>
			)}
		</HomeWrapper>
	);
}

export default UserHome;

// Styled components

const Wave = styled.img`
	position: absolute;
	top: 0;
	left: 0;
`;

const PillHeading = styled.h5`
	font-style: italic;
	color: #828282;
	font-weight: normal;
`;

const PillWrapper = styled.div`
	background: #fff6f6;
	box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	border: 1px solid #babfcd;
	margin: 1rem auto;
	width: 327px;
	height: 319px;
`;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin: auto;
	text-align: center;
`;

const AddButton = styled.button`
	margin: ${props => (props.margin ? props.margin : null)};
	font-family: mosk;
	font-size: 14px;
	font-weight: bold;
	text-decoration: none;
	background: #8d8dd4;
	box-shadow: 4px 5px #4c4cb4;
	border-radius: 30px;
	border: none;
	overflow: hidden;
	width: 60px;
	height: 44px;
	content: "";
	&:hover {
		cursor: pointer;
		background: #8d8dd4;
		box-shadow: 4px 5px #4c4cb4;
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
	&:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
	transform: translate3d(0, 0, 0);
	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
`;

const SignOutButton = styled.button`
	box-shadow: 4px 5px #ea8324;
	color: black;
	font-family: mosk;
	font-size: 14px;
	font-weight: bolder;
	background: linear-gradient(180deg, #fdaf67 0%, #f7c649 100%);
	border-radius: 30px;
	border: none;
	width: 100px;
	height: 44px;
	:after {
		transform: translate(-0.3rem, -0.3rem);
	}
	align-self: center;
	overflow: hidden;
	z-index: 1;
	outline: none;
	:hover {
		cursor: pointer;
		box-shadow: 4px 5px #fdaf67;
		background: linear-gradient(180deg, #f7c649 0%, #ea8324 100%);
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-bottom: 30px;
`;

const DateStyled = styled.h2`
	font-family: monospace;
	text-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
	font-size: 16px;
	font-weight: bolder;
	width: 58px;
	margin: 40px auto;
	box-shadow: 0 5px 15px rgb(57, 168, 228);
	padding: 8px;
	padding-left: 2em;
	padding-right: 2em;
	color: white;
	border-radius: 30px;
	background-image: linear-gradient(135deg, #8d8dd4, #45ced4);
	&:hover {
		transition: box-shadow 0.5s;
		box-shadow: 0 8px 25px rgb(57, 168, 228);
	}
`;

const DateWrapper = styled.div``;
