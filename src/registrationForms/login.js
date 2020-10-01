/** @format */

import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaLock, FaRegUserCircle, FaRegEyeSlash } from "react-icons/fa";
import { logIn } from "../utils/user-management";
import { Form } from "../addMedication/formstyle";

function Login() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = React.useState();

	const handleSubmit = async event => {
		event.preventDefault();
		try {
			await logIn(email, password);
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
				type="password"
				value={password}
				onChange={event => setPassword(event.target.value)}
				required
			/>
			<FaRegEyeSlash />

			{error ? <p>{error}</p> : null}

			<button type="submit">
				LOGIN <AiOutlineSend />
			</button>
		</Form>
	);
}

export default Login;
