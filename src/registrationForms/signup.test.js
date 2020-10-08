import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SignUp } from "./signup";
import { BrowserRouter as Router } from "react-router-dom";

test("Signup page loads", () => {
	render(
		<Router>
			<SignUp></SignUp>
		</Router>,
	);
	screen.getByText("SIGN UP");
});

test("Check the user is signing up", () => {
	render(
		<Router>
			<SignUp></SignUp>
		</Router>,
	);
	const emailInput = screen.getByLabelText("Email");
	fireEvent.change(emailInput, { target: { value: "amy@gmail.com" } });
	const passwordInput = screen.getByLabelText("Password");
	fireEvent.change(passwordInput, { target: { value: "ilovefac20" } });
	const button = screen.getByText("SIGN UP");
	fireEvent.click(button);
});
