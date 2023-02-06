//Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAcgwVxRY2M45b9f6hk33xbohvlrtlAXxw",
  authDomain: "expensify-9f919.firebaseapp.com",
  databaseURL: "https://expensify-9f919-default-rtdb.firebaseio.com",
  projectId: "expensify-9f919",
  storageBucket: "expensify-9f919.appspot.com",
  messagingSenderId: "477623624339",
  appId: "1:477623624339:web:655a727ed8ae6afc5ae366",
  measurementId: "G-6KQ5MM8KDG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export {firebase, database as default};
//child_remove event

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key,snapshot.val());
// })

// //child_changes event
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key,snapshot.val());
// })

// // child_added event
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key,snapshot.val());
// })
// database.ref("expenses").on("value", (snapshot) => { // value is the event name
//   let data = [];
//   snapshot.forEach(chaildSnapShot => {
//     data.push({
//       id: chaildSnapShot.key,
//       ...chaildSnapShot.val()
//     })
//   })
//   console.log(data);
// })

// database.ref("expenses").push({
//   "description": "Rent",
//   "note": "",
//   "amount": 10000,
//   "createAt":938493841938
// })

// database.ref("expenses").push({
//   "description": "Phone Bill",
//   "note": " this is cost of monthly subscription",
//   "amount": 38473984,
//   "createAt":93849341938
// })
// database.ref("expenses").push({
//   "description": "Food",
//   "note": "",
//   "amount": 1037820,
//   "createAt":9384991241938
// })


// database.ref("expenses")
// .once("value") // once return promise
// .then((snapshot) =>{
//   let data = [];
//   snapshot.forEach(childSnapshot => {
//       data.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//   });
//  console.log(data);
// }).catch((e) => {
// console.log("Error fetching data", e);
// });
// database.ref("notes").push(
//   {
//   title: "Pathan",
//   Body: "Go and Watch pathaan" 
// })
// database.ref("notes/-NN5PHV-ym0hhi0Btx6x").update({
//   title: "Success",
//   Body: "Great things never came from comfort zone!"
// })
// const notes = [
//   {
//     "id": 10,
//     "title": "First Notes",
//     "Body": "This is my note"
//   },
//   {
//     "id": "12ase",
//     "title": "Another Notes",
//     "Body": "This is another my note"
//   }];

//   database.ref("notes").set(notes)
// database.ref().on("value", (snapshot) => {
//   const data = snapshot.val()
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// })
// fetching data from the database  note: on method calls automatically when any changes will done in the database
// const onValueChanged = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log("Error with fetching data", e);
// })


// setTimeout(() => {
//     database.ref("age").set(30)
// },3500)

// setTimeout(() => {
//   database.ref().off("value", onValueChanged)
// },7000)

// setTimeout(() => {
//   database.ref("age").set(40)   // set is used to update the value
// },10500)
// fetching  all data from the database single time
// database.ref()
// .once("value") // once return promise
// .then((snapshot) =>{
//   const data  = snapshot.val()
//   console.log(data);
// }).catch((e) => {
// console.log("Error fetching data", e);
// });

// database.ref("job/title")
// .once("value")
// .then((snapshot) =>{
//   const data  = snapshot.val()
//   console.log(data);
// }).catch((e) => {
// console.log("Error fetching data", e);
// });
// firebase.database().ref().set({
//   "name": "Ataur Rahman",
//   "age": 25,
//   "stressLevel": 6,
//   "job": {
//            title: "software developer",
//            company: "Google"
//   },
//   "isSingleton": true,
//   "location": {
//     city: "Noida",
//     country: "India"
//   },
// }).then(() => {
//   console.log("Data is saved!");
// }).catch(err => console.log("this failed: " + err));

// firebase.database().ref("age").set(24)
// firebase.database().ref("location/city").set("Lucknow")

// firebase.database().ref("attributes").set({
//   height: 6,
//   wight: 70
// }).then(() => {
//   console.log("Second set call worked!");
// }).catch((e) => {
//   console.log("Things did not work for the second set call");
// })


// Removing data
// database.ref("isSingleton")
// .remove()
// .then(() => {
//   console.log("delete successfully");
// }).catch(() => {
//   console.log("something went wrong");
// })

//   updating data
// database.ref().update({
//   job: "Manager",
//   "location/city": "Philadelphia"
// }).then(() => {
//   console.log("Update successfully");
// }
// ).catch(() => {
//   console.log("Something went wrong");
// })

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// }).then(() => {
//   console.log("Update successfully");
// }
// ).catch(() => {
//   console.log("Something went wrong");
// })