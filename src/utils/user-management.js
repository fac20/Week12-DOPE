/** @format */

import { auth } from "../connection";

const signUp = (email, password) => {
	return auth().createUserWithEmailAndPassword(email, password);
};
// signUp("test@email.com", "password123");

const logIn = (email, password) => {
	return auth().signInWithEmailAndPassword(email, password);
};

const signOut = () => {
	return auth().signOut();
};

export { signUp, signOut, logIn };
