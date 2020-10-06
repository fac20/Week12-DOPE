/** @format */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.js";

test("Jest is working", () => {
	expect(true).toBeTruthy();
});

test("Loads Landing Page", () => {
	render(<App></App>);
	screen.getByText("PILLOW");
}); /** @format */

test("Testing that main button takes us to the login/signup UI", () => {
	render(<App></App>);
	const button = screen.getByText("GET STARTED");
	fireEvent.click(button);
	screen.getByText("SIGN UP");
});
