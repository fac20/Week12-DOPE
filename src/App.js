/** @format */

import React from "react";
import AddMedication from "./addMedication/form";
import db from "./connection.js";

function App() {
	db.collection("Users")
	.where("name", "==", "Jihyun")
	.get()
	.then(users => {
		users.forEach(user => console.log(user.data()));
	});

	return (
		<div className="App">
			<AddMedication />
		</div>
	);
}

export default App;
