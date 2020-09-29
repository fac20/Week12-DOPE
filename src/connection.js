/** @format */

import firebase from "firebase";
import "firebase/firestore";
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

// initialise fire base
let fire = firebase.initializeApp(firebaseConfig);
db = firebase.firestore(fire);

export default db;
