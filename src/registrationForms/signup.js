/** @format */

import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaLock, FaRegEnvelope, FaRegEyeSlash } from "react-icons/fa";
import { signUp } from "../utils/user-management";

function SignUp() {
	const [email, setEmail] = React.useState();
	const [password, setPassword] = React.useState();

	const handleSubmit = event => {
		event.preventDefault();
		signUp(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
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
			<button type="submit">
				{" "}
				SIGN UP <AiOutlineSend />
			</button>
		</form>
	);
}

export default SignUp;
