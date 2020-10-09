import React from "react";
import styled from "styled-components";
import AddMedication from "./AddMedication/AddMedicationForm";
import UserHome from "./UserHome/UserHome";
import { SignUp } from "./RegistrationForms/Signup";
import { Login } from "./RegistrationForms/Login";
import { LandingPage } from "./LandingPage/LandingPage";
import { SearchNHS } from "./SearchNHS/SearchNHS";
import MedicationAdded from "./AddMedication/MedicationAdded";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import { auth } from "./connection";
import mobileLogo from "./assets/mobileLogo.svg";

function App() {
	const [authStatus, setAuthStatus] = React.useState(false);

	auth().onAuthStateChanged(user => {
		user ? setAuthStatus(true) : setAuthStatus(false);
	});

	if (authStatus) {
		return (
			<Router>
				<>
					<MobileLogo alt="mobile logo" src={mobileLogo} />
				</>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/home" />
					</Route>

					<Route path="/home">
						<UserHome />
					</Route>

					<Route path="/add-medication">
						<AddMedication />
					</Route>

					<Route path="/signup">
						<Redirect to="/home" />
					</Route>

					<Route path="/login">
						<Redirect to="/home" />
					</Route>

					<Route path="/medication-added">
						<MedicationAdded />
					</Route>

					<Route path="/search">
						<SearchNHS />
					</Route>

					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		);
	} else {
		return (
			<Router>
				<>
					<MobileLogo alt="mobile logo" src={mobileLogo} />
				</>
				<Switch>
					<Route path="/" exact>
						<LandingPage />
					</Route>

					<Route path="/home">
						<Redirect to="/login" />
					</Route>

					<Route path="/add-medication">
						<Redirect to="/login" />
					</Route>

					<Route path="/signup">
						<SignUp />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/medication-added">
						<Redirect to="/login" />
					</Route>

					<Route path="/search">
						<SearchNHS />
					</Route>

					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;

const MobileLogo = styled.img`
	width: 40px;
	margin-left: 4vw;
	margin-top: 10vh;
	@media (min-width: 768px) {
		margin-top: 28vh;
	}
`;
