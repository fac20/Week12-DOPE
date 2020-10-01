/** @format */

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

test("Jest is working", () => {
	expect(true).toBeTruthy();
});

test("Testing Add Medication Form loads", () => {
	render(<App></App>);
	screen.getByText("Email");
}); /** @format */
