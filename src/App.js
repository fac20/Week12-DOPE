/** @format */

import React from "react";
import AddMedication from "./addMedication/form";
import UserHome from "./userHome/userHome";
import SignUp from "./registrationForms/signup";
import Login from "./registrationForms/login";
import { AiOutlineSend } from "react-icons/ai";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
} from "react-router-dom";
import { signUp, signOut, logIn } from "./utils/user-management";
import { auth } from "./connection";

function App() {
	const [authStatus, setAuthStatus] = React.useState(false);

	auth().onAuthStateChanged(user => {
		user ? setAuthStatus(true) : setAuthStatus(false);
	});
	// console.log(auth().currentUser)

	return (
		<Router>
			<Switch>
				<Route path="/home" exact>
					{authStatus ? <UserHome /> : <Redirect to={{ pathname: "/login" }} />}
					<button onClick={signOut}>SIGN OUT </button>
				</Route>

				<Route path="/add-medication">
					<AddMedication />
				</Route>

				<Route path="/" exact>
					{authStatus ? <Redirect to={{ pathname: "/home" }} /> : <SignUp />}
					<button onClick={signOut}>SIGN OUT</button>
					<button onClick={() => logIn("test@email.com", "password123")}>
						log in
					</button>
				</Route>

				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
