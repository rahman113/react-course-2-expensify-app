 //Import the functions you need from the SDKs you need
 import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.database().ref().set({
    "name": "Ataur Rahman",
    "age": 25,
    "isSingleton": true,
    "location": {
        city: "Noida",
        country: "India"
    },
})

firebase.database().ref("age").set(24)
firebase.database().ref("location/city").set("Lucknow")

firebase.database().ref("attributes").set({
      height: 6,
      wight: 70
})