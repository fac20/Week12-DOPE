/** @format */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./login";
import { BrowserRouter as Router } from "react-router-dom";

test("Login page loads", () => {
	render(
		<Router>
			<Login></Login>
		</Router>,
	);
	screen.getByText("LOGIN");
});

test("Check the user is logging in", () => {
	render(
		<Router>
			<Login></Login>
		</Router>,
	);
	const emailInput = screen.getByLabelText("Email");
	fireEvent.change(emailInput, { target: { value: "amy@gmail.com" } });
	const passwordInput = screen.getByLabelText("Password");
	fireEvent.change(passwordInput, { target: { value: "ilovefac20" } });
	const button = screen.getByText("LOGIN");
	fireEvent.click(button);
});
