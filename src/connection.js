/** @format */

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
let db;
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export default fire;
