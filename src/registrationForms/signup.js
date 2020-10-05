/** @format */

import React, { useState } from "react";
import { FaLock, FaRegEnvelope, FaRegEyeSlash } from "react-icons/fa";
import { signUp, signInWithGoogle } from "../utils/user-management";
import { signUpDB } from "../utils/data-helpers";
import { auth } from "../connection";
import styled from "styled-components";
import { Checkbox } from "@progress/kendo-react-inputs";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: "DM Sans", sans-serif;
`;

const Label = styled.label`
	font-size: 12px;
	font-weight: medium;
	color: #8f92a1;
	margin-bottom: 10px;
`;

const Input = styled.input`
	font-family: "DM Sans", sans-serif;
	color: rgba(23, 23, 23, 1);
	font-size: 16px;
	font-weight: medium;
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
`;

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
			<Form onSubmit={handleSubmit}>
				<Label>Email</Label>
				<span>
					<FaRegEnvelope />
					<Input
						name="name"
						type="email"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
				</span>

				<Label>Password</Label>
				<span>
					<FaLock />
					<Input
						name="name"
						type={inputType}
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>
				</span>
				<span
					onMouseEnter={() => setInputType(currentType => "text")}
					onMouseLeave={() => setInputType(currentType => "password")}>
					<FaRegEyeSlash />
				</span>

				{error ? <p>{error}</p> : null}
				<button type="submit"> SIGN UP</button>
				<div>
					<Checkbox id={"chb1"}>
						<label for={"chb1"} style={{ display: "inline-block" }}>
							By clicking Sign Up, you agree to our Terms and Conditions.
						</label>
					</Checkbox>
				</div>
				<button onClick={handleGoogleSignIn}>Sign in with Google</button>
			</Form>
		</>
	);
}

export default SignUp;
