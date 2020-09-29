/** @format */

const db = require("./connection.js");
const firebase = require("firebase");

// adding a new document to a collection without setting the ID
// db.collection("Users")
//     .add({
//         name: "terrence",
//         password: "t-boss",
//         'favourite-food': 'sushi'
//     })
//     .then(() => console.log("yay data is added"))

// adding a doc with a name and fields
// db.collection("Users")
//     .doc("shaya")
//     .set({
//         name: "shaya",
//         password: "slayer",
//         'favourite-food': 'pizza'
//     })
//     .then(() => console.log("yay data is added"))

// adding user to doc with random ID
// db.collection("Users")
//     .doc()
//     .set({
//         name: "shaya1",
//         password: "slayer",
//         'favourite-food': 'pizza'
//     })
//     .then(() => console.log("yay data is added"))

// to update docs with doc name
// db.collection("Users")
//     .doc("shaya")
//     .update({
//         'favourite-food': 'bibimbab',
//         'favourite-colour': 'red'
//     })
//     .then(() => console.log("done"))

// deleting fields
// db.collection("Users")
//     .doc("shaya")
//     .update({
//         'favourite-food': firebase.firestore.FieldValue.delete()
//     })
//     .then(() => console.log("done"))

//delete document
// db.collection("Users")
//     .doc("shaya")
//     .delete()
//     .then(() => console.log("done"))

//querying all docs in a collection
db.collection("Users")
	.where("name", "==", "Jihyun")
	.get()
	.then(users => {
		users.forEach(user => console.log(user.data()));
	});
