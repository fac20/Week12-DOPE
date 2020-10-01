/** @format */

const firebase = require("firebase/app");
require("firebase/firestore");
let db;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// firebaseConfig  should be here
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_measurementId,
};

// initialize fire base
let fire = firebase.initializeApp(firebaseConfig);
db = firebase.firestore(fire);

let username = "jihyun";

let objData = {
	oftenFreq: "1",
	name: "aspirin",
	type: "tablet",
	strength: "10",
	unit: "mg",
	description: "white round tablet",
	amount: "1",
	beforeAfter0: "before",
	timeOfDay0: "morning",
	ampm0: "AM",
	hour0: "08",
	minute0: "00",
	priority: "Medium",
	notes: "Eat with food.",
	supply: "10",
};

// db.collection("Users")
// 	.doc()
// 	.set({ username: username })
// 	.then(() => console.log("yay"));

// db.collection("Users")
// 	.where("username", "==", "jihyun")
// 	.get()
// 	.then(users => {
// 		users.forEach(user => {
// 			db.collection("Users")
// 				.doc(user.id)
// 				.collection("medication") // names/targets the collection
// 				.doc(objData.name) //names/targets the document
// 				.set(objData);
// 		});
// 	})
// 	.then(() => console.log("data added"));

// querying all docs in a medicationcollection
// db.collection("Users").doc(username).collection("medication")
// 	.get()
// 	.then(records => {
// 		records.forEach(record => {

// 		});
// 	});
// newObject = user.data()
// newObject.id = user.idct = user.data()
// newObject.id = user.id

// let newArray = []

// db.collection("Users")
// 	.doc("amy")
// 	.collection("medication")
// 	.get()
// 	.then(records => {
// 		records.forEach(record => {
// 			let newObj = record.data()
// 			newObj.id = record.id
// 			newArray.push(newObj)
// 		})
// 	})
// 	.then(() => console.log(newArray))


