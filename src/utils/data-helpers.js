import { db } from "../connection.js";
import "firebase/firestore";

function signUpDB(username) {
	// what happens with errors?
	return db.collection("Users").doc(username).set({ username: username });
}

function addMedicationDB(username, medicineObj) {
	return db
		.collection("Users")
		.doc(username)
		.collection("medication")
		.add(medicineObj);
	// .doc()
	// .set(medicineObj);
}

function getAllMedicationDB(username) {
	let newArray = [];
	return db
		.collection("Users")
		.doc(username)
		.collection("medication")
		.get()
		.then(records => {
			records.forEach(record => {
				let newObj = record.data();
				newObj.id = record.id;
				newArray.push(newObj);
			});
		})
		.then(() => {
			return newArray;
		});
}

export { signUpDB, addMedicationDB, getAllMedicationDB };
