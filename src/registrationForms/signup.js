/** @format */

import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaLock, FaRegEnvelope, FaRegEyeSlash } from "react-icons/fa";
import { signUp, signInWithGoogle } from "../utils/user-management";
import { Form } from "../addMedication/formstyle";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [inputType, setInputType] = useState("password");

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			await signUp(email, password);
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
				<label>Email</label>
				<FaRegEnvelope />
				<input
					name="name"
					type="email"
					value={email}
					onChange={event => setEmail(event.target.value)}
				/>

				<label>Password</label>
				<FaLock />
				<input
					name="name"
					type={inputType}
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>

				<div
					onMouseEnter={() => setInputType(currentType => "text")}
					onMouseLeave={() => setInputType(currentType => "password")}>
					<FaRegEyeSlash />
				</div>

				{error ? <p>{error}</p> : null}

				<button type="submit">
					{" "}
					SIGN UP <AiOutlineSend />
				</button>
			</Form>

			<button onClick={handleGoogleSignIn}>Sign in with Google</button>
		</>
	);
}

export default SignUp;
