/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaRegEnvelope, FaRegEyeSlash } from "react-icons/fa";
import { logIn, signInWithGoogle } from "../utils/user-management";
import { Button } from "../addMedication/formStyle";
import RightArrow from "../assets/rightarrow.png";
import styled from "styled-components";
import { Text } from "../landingPage/landingPage";
import {
	Form,
	Title,
	Label,
	Input,
	FlexDiv,
	FormWrapper,
	AlignStartWrapper,
	Arrow,
} from "./signup";

const SignUpButton = styled.button`
	font-family: "DM Sans", sans-serif;
	font-weight: bold;
	font-size: 24px;
	text-align: center;
	margin-right: 1.5rem;
	border: none;
	background: transparent;
	opacity: 0.4;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const GoogleButton = styled.button`
	width: 75%;
	height: 40px;
	border-width: 0;
	background: #4285f4;
	color: white;
	border-radius: 5px;
	white-space: nowrap;
	box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
	transition-property: background-color, box-shadow;
	transition-duration: 150ms;
	transition-timing-function: ease-in-out;
	padding: 0;
	cursor: pointer;
	&:focus,
	&:hover {
		box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
		background-color: #307af5;
	}
	&:active {
		box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
		transition-duration: 10ms;
		position: relative;
		top: 3px;
		left: 3px;
	}
`;

const GoogleIconWrapper = styled.div`
	position: absolute;
	margin-bottom: 220px;
	width: 40px;
	height: 36px;
	border-radius: 2px;
	background-color: white;
	border: 1px solid #4285f4;
`;

const GoogleIcon = styled.img`
	display: inline-block;
	vertical-align: middle;
	margin: 10px 0 5px 3px;
	width: 18px;
	height: 18px;
	box-sizing: border-box;
	width: 27px;
`;

const GoogleText = styled.p`
	display: inline-block;
	vertical-align: middle;
	padding: 0 24px;
	font-size: 14px;
	font-weight: bold;
	font-family: "Roboto", sans-serif;
`;

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [inputType, setInputType] = useState("password");

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			await logIn(email, password);
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
		<FormWrapper>
			<Form onSubmit={handleSubmit}>
				<FlexDiv alignItems="center">
					<Link to="/signup">
						<SignUpButton>Sign Up</SignUpButton>
					</Link>
					<Title>Login</Title>
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
							required
						/>
					</span>

					<Label htmlFor="password">Password</Label>

					<FlexDiv>
						<FaLock />
						<Input
							name="password"
							id="password"
							type={inputType}
							value={password}
							onChange={event => {
								setPassword(event.target.value);
								setError();
							}}
							required
						/>
						<div
							onMouseEnter={() => setInputType(currentType => "text")}
							onMouseLeave={() => setInputType(currentType => "password")}>
							<FaRegEyeSlash />
						</div>
					</FlexDiv>
				</AlignStartWrapper>

				{error ? <p>{error}</p> : null}

				<Button type="submit" margin="2rem 0 2rem 0">
					<Text>
						LOGIN <Arrow alt="arrow" src={RightArrow}></Arrow>
					</Text>
				</Button>
				<GoogleButton onClick={handleGoogleSignIn}>
					<GoogleIconWrapper>
						<GoogleIcon
							alt="google icon"
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></GoogleIcon>
					</GoogleIconWrapper>
					<GoogleText>Sign in with Google</GoogleText>
				</GoogleButton>
			</Form>
		</FormWrapper>
	);
}

export { Login };
