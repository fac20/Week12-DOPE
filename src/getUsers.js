/** @format */

import db from "./connection.js";

//querying all docs in a collection
db.collection("Users")
	.where("name", "==", "Jihyun")
	.get()
	.then(users => {
		users.forEach(user => user.data());
	});
