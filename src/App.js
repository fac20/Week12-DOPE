/** @format */

import React from "react";
import firebase from "firebase/app";
import AddMedication from "./addMedication/form";
import UserHome from "./userHome/userHome";
import fire from "./connection";
import "firebase/firestore"
function App() {
	let db;
	db = firebase.firestore(fire);

	db.collection("Users")
		.where("name", "==", "Jihyun")
		.get()
		.then(users => {
			users.forEach(user => console.log(user.data()));
		});

	return (
		<div className="App">
			<AddMedication />
			<UserHome/>
			
		</div>
	);
}



export default App;
