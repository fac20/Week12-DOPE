/** @format */

/// <reference types="cypress" />

describe("Landing page to Signup page Test", () => {
	it("Gets, types and asserts", () => {
		// deletes the authenticated token from the indexedDB
		indexedDB.deleteDatabase("firebaseLocalStorageDb");
		cy.visit("/");
		cy.contains("GET STARTED").click();
		// Should be on a new URL which includes '/signup'
		cy.url().should("include", "/signup");
		// Get an input, type into it and verify that the value has been updated
		cy.get("input[type=email]")
			.type("jihyun123@fac20.com")
			.should("have.value", "jihyun123@fac20.com");
	});
});

describe("Signup page Test", () => {
	it("Gets, types and asserts", () => {
		cy.visit("/signup");
		cy.get("input[type=email]")
			.type("test6@fac20.com")
			.should("have.value", "test6@fac20.com");
		cy.get("input[type=password]")
			.type("ilovefac20")
			.should("have.value", "ilovefac20");
		cy.contains("clicking").click();
		cy.contains("SIGN UP").click();
		cy.contains("already in use");
	});
});
