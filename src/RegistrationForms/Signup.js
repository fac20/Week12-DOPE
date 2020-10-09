import React, { useState } from "react";
import { FaLock, FaRegEnvelope, FaRegEyeSlash } from "react-icons/fa";
import { signUp, signInWithGoogle } from "../utils/user-management";
import { signUpDB } from "../utils/data-helpers";
import { auth } from "../connection";
import styled from "styled-components";
import { Button } from "../AddMedication/FormStyle";
import RightArrow from "../assets/rightarrow.png";
import { Text } from "../LandingPage/LandingPage";
import { Link } from "react-router-dom";
import oval from "./../assets/oval.svg";
import wave from "./../assets/wave.svg";
import {
	GoogleButton,
	GoogleIconWrapper,
	GoogleIcon,
	GoogleText,
} from "./Login";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [inputType, setInputType] = useState("password");

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			await signUp(email, password);
			await signUpDB(auth().currentUser.email);
		} catch (error) {
			setError(error.message);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await signInWithGoogle();
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<>
			<Oval alt="" src={oval} />
			<Wave alt="" src={wave} />
			<FormWrapper>
				<Form onSubmit={handleSubmit}>
					<FlexDiv alignItems="center">
						<Title>Sign Up</Title>
						<Link to="/login">
							<LoginButton type="button">Login</LoginButton>
						</Link>
					</FlexDiv>

					<AlignStartWrapper>
						<Label htmlFor="email">Email</Label>
						<span>
							<FaRegEnvelope />
							<Input
								name="email"
								id="email"
								type="email"
								value={email}
								onChange={event => {
									setEmail(event.target.value);
									setError();
								}}
							/>
						</span>

						<Label htmlFor="password">Password</Label>

						<FlexDiv>
							<FaLock />
							<Input
								id="password"
								name="password"
								type={inputType}
								value={password}
								onChange={event => {
									setPassword(event.target.value);
									setError();
								}}
							/>
							<div
								onMouseEnter={() => setInputType(currentType => "text")}
								onMouseLeave={() => setInputType(currentType => "password")}>
								<FaRegEyeSlash />
							</div>
						</FlexDiv>
					</AlignStartWrapper>

					{error ? <p>{error}</p> : null}

					<Label textColor="black" margin="3rem 0 0 0">
						<Input type="checkbox" id={"tos"} required></Input>
						By clicking this box, you agree to our Terms and Conditions.
					</Label>

					<Button type="submit" margin="2rem 0 2rem 0">
						<Text>
							SIGN UP <Arrow alt="arrow" src={RightArrow}></Arrow>
						</Text>
					</Button>
					<GoogleButton onClick={handleGoogleSignIn}>
						<GoogleIconWrapper>
							<GoogleIcon
								alt="google icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></GoogleIcon>
						</GoogleIconWrapper>
						<GoogleText>Sign up with Google</GoogleText>
					</GoogleButton>
				</Form>
			</FormWrapper>
		</>
	);
}

export { SignUp };

export const Oval = styled.img`
	position: absolute;
	left: 0;
	bottom: 0;
	margin: 0;
	padding: 0;
`;

export const Wave = styled.img`
	position: absolute;
	top: 0;
	margin: 0;
	padding: 0;
	left: 0;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: mosk;
	width: 50%;
	@media (max-width: 768px) {
		width: 80%;
	}
`;
export const Title = styled.h1`
	font-family: mosk;
	font-weight: medium;
	font-size: 24px;
	text-align: center;
	margin: 0;
`;
export const Label = styled.label`
	font-size: 12px;
	font-weight: normal;
	color: ${props => (props.textColor ? props.textColor : "#585858")};
	text-align: left;
	margin: ${props => (props.margin ? props.margin : "0.8rem 0")};
`;
export const Input = styled.input`
	font-family: mosk;
	color: rgba(23, 23, 23, 1);
	font-size: 16px;
	/* creates underline input field */
	border: 0;
	outline: 0;
	background: transparent;
	border-bottom: 1px solid #8f92a1;
	-webkit-transition: box-shadow 0.3s;
	transition: box-shadow 0.3s;
	&:focus {
		outline: none;
		box-shadow: -8px 10px 0px -7px rgba(253, 175, 103, 1),
			8px 10px 0px -7px rgba(253, 175, 103, 1);
	}
	text-align: center;
	::-webkit-input-placeholder {
		text-align: center;
	}
`;
export const FlexDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: ${props => (props.alignItems ? props.alignItems : null)};
`;
export const FormWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100vw;
`;
export const AlignStartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const Arrow = styled.img`
	width: 15px;
	float: right;
	margin-right: 20px;
`;

export const LoginButton = styled.button`
	font-family: mosk;
	font-weight: bold;
	font-size: 24px;
	text-align: center;
	margin-left: 1.5rem;
	border: none;
	background: transparent;
	opacity: 0.4;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;
