import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { auth } from "./connection";

import AddMedication from "./addMedication/form";
import UserHome from "./userHome/userHome";
import { SignUp } from "./registrationForms/signup";
import { Login } from "./registrationForms/login";
import { LandingPage } from "./landingPage/landingPage";
import MedicationAdded from "./addMedication/medication-added";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";

function App() {
	const [authStatus, setAuthStatus] = React.useState(false);

	auth().onAuthStateChanged(user => {
		user ? setAuthStatus(true) : setAuthStatus(false);
	});

	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					{authStatus ? <Redirect to="/home" /> : <LandingPage />}
				</Route>

				<Route path="/home" exact>
					{authStatus ? <UserHome /> : <Redirect to="/login" />}
				</Route>

				<Route path="/add-medication">
					<AddMedication />
				</Route>

				<Route path="/signup" exact>
					{authStatus ? <Redirect to="/" /> : <SignUp />}
				</Route>

				<Route path="/login">
					{authStatus ? <Redirect to="/" /> : <Login />}
				</Route>

				<Route path="/medication-added">
					<MedicationAdded />
				</Route>

				<Route>
					<PageNotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
