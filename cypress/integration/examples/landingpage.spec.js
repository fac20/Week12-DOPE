/** @format */

/// <reference types="cypress" />

describe("Landing page Test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("/");
		cy.contains("GET STARTED").click();
		// Should be on a new URL which includes '/signup'
		cy.url().should("include", "/signup");
		// Get an input, type into it and verify that the value has been updated
		cy.get("input[type=email]")
			.type("jihyun@fac20.com")
			.should("have.value", "jihyun@fac20.com");
	});
});
