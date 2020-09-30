const firebase = require('firebase/app');
require('firebase/firestore');
let db;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// firebaseConfig  should be here
const firebaseConfig = {
    apiKey: "AIzaSyCKOdFKQOSSFUvWcrYhN2oR2U0n5F6FxUI",
    authDomain: "pillow-8d61a.firebaseapp.com",
    databaseURL: "https://pillow-8d61a.firebaseio.com",
    projectId: "pillow-8d61a",
    storageBucket: "pillow-8d61a.appspot.com",
    messagingSenderId: "106764588557",
    appId: "1:106764588557:web:8a14e18c9752e008e8e744",
    measurementId: "G-6D43KFGDES"
};

// initialize fire base
let fire = firebase.initializeApp(firebaseConfig)
db = firebase.firestore(fire)

let username = "jihyun"

let objData = {
   "oftenFreq": "1", 
   "name": "aspirin", 
   "type": "tablet", 
   "strength": "10", 
   "unit": "mg", 
   "description": "white round tablet", 
   "amount": "1", 
   "beforeAfter0": "before", 
   "timeOfDay0": "morning", 
   "ampm0": "AM", 
   "hour0": "08", 
   "minute0": "00",
    "priority": "Medium",
    "notes": "Eat with food.",
    "supply": "10" 
  }

db.collection("Users")
    .doc()
    .set({ username: username })
    .then(()=> console.log("yay"))

db.collection("Users")
.where("username", "==", "jihyun")
  .get()
  .then(users => {
	users.forEach(user => {
    db.collection("Users") 
    .doc(user.id)
    .collection("medication") // names/targets the collection
    .doc(objData.name) //names/targets the document
    .set(objData)
  })
})
.then(()=> console.log("data added"))
  
 //querying all docs in a collection
// db.collection("Users")
	// .where("name", "==", "Jihyun")
// 	.get()
// 	.then(users => {
// 		users.forEach(user => console.log(user.data()));
// 	});
