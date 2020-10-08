/** @format */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
// handling errors?
const nhsApiKey = functions.config().nhs.api_key;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const url = "https://api.nhs.uk/medicines/";
const app = express();
app.use(express.json());
// const corsOptions = {
// 	origin: "https://travel-jar.netlify.app/",
// 	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
app.use(cors());

// function to fetch data from NHS API
const getNHSData = (url, param) => {
	return fetch(url + param, {
		method: "GET",
		headers: {
			"subscription-key": nhsApiKey,
		},
	})
		.then(response => {
			if (!response.ok) {
				const error = new Error("api error");
				error.status = response.status;
				throw error;
			} else {
				return response.json();
			}
		})
		.catch(error => {
			console.error(error);
		});
};

app.get("/search/:medicine", (req, res, next) => {
	const params = req.params.medicine;
	console.log(params);
	return getNHSData(url, params)
		.then(data => res.send(data))
		.catch(error => next(error));
});

exports.nhsData = functions.https.onRequest(app);
