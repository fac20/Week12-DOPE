/** @format */

import React from "react";
import styled from "styled-components";
import AddMedication from "./addMedication/form";
import UserHome from "./userHome/userHome";
import { SignUp } from "./registrationForms/signup";
import { Login } from "./registrationForms/login";
import { LandingPage } from "./landingPage/landingPage";
import { SearchNHS } from "./searchNHS/SearchNHS";
import MedicationAdded from "./addMedication/medication-added";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";
import oval from "./assets/oval.svg";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
// import { signOut } from "./utils/user-management";
import { auth } from "./connection";

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
					{/* <Button margin="10px auto" onClick={signOut}>SIGN OUT </Button> */}
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

export default App;

const Button = styled.button`
	margin: ${props => (props.margin ? props.margin : null)};
	font-size: 14px;
	font-weight: bold;
	font-style: italic;
	background: linear-gradient(180deg, #fdaf67 0%, #f7c649 100%);
	border-radius: 30px;
	border: none;
	width: 150px;
	height: 44px;
	align-self: center;
	overflow: hidden;
	z-index: 1;
	display: block;
	:hover {
		cursor: pointer;
		background: linear-gradient(180deg, #f7c649 0%, #fdaf67 100%);
	}
	:active {
		position: relative;
		top: 3px;
		left: 3px;
	}
`;
