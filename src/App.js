/** @format */

import React from "react";
import AddMedication from "./addMedication/form";
import UserHome from "./userHome/userHome";
import "firebase/firestore";
function App() {
	return (
		<div className="App">
			<AddMedication />
			<UserHome />
		</div>
	);
}

export default App;
