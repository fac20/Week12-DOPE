/** @format */

import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaLock, FaRegEnvelope, FaRegEyeSlash } from "react-icons/fa";
import { signUp } from "../utils/user-management";
import { Form } from "../addMedication/formstyle";

function SignUp() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = React.useState();

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			await signUp(email, password);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
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
				type="password"
				value={password}
				onChange={event => setPassword(event.target.value)}
				required
			/>
			<FaRegEyeSlash />

			{error ? <p>{error}</p> : null}

			<button type="submit">
				{" "}
				SIGN UP <AiOutlineSend />
			</button>
		</Form>
	);
}

export default SignUp;
