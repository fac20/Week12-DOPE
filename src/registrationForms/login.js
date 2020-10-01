/** @format */

import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaLock, FaRegUserCircle, FaRegEyeSlash } from "react-icons/fa";
import { logIn } from "../utils/user-management";

function Login() {
	const [email, setEmail] = React.useState();
	const [password, setPassword] = React.useState();

	const handleSubmit = event => {
		event.preventDefault();
		logIn(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
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
				type="text"
				value={password}
				onChange={event => setPassword(event.target.value)}
				required
			/>
			<FaRegEyeSlash />
			<button type="submit">
				LOGIN <AiOutlineSend />
			</button>
		</form>
	);
}

export default Login;
