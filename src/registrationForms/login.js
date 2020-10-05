/** @format */

import React, { useState } from "react";
import { FaLock, FaRegUserCircle, FaRegEyeSlash } from "react-icons/fa";
import { logIn, signInWithGoogle } from "../utils/user-management";
import { Form } from "../addMedication/formStyle";
import { Button } from "../addMedication/formStyle";
import RightArrow from "../assets/rightarrow.png";
import { Text } from "../landingPage/landingPage";
import { Arrow } from "./signup";

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
		<Form onSubmit={handleSubmit}>
			<label>Email</label>
			<FaRegUserCircle />
			<input
				name="name"
				type="email"
				value={email}
				onChange={event => setEmail(event.target.value)}
				required
			/>

			<label>Password</label>
			<FaLock />
			<input
				name="name"
				type={inputType}
				value={password}
				onChange={event => setPassword(event.target.value)}
				required
			/>

			<div
				onMouseEnter={() => setInputType(currentType => "text")}
				onMouseLeave={() => setInputType(currentType => "password")}>
				<FaRegEyeSlash />
			</div>

			{error ? <p>{error}</p> : null}

			<button type="submit">LOGIN</button>
			<Button onClick={handleGoogleSignIn}>
				<Text>
					Sign in with Google <Arrow alt="arrow" src={RightArrow}></Arrow>
				</Text>
			</Button>
		</Form>
	);
}

export default Login;
