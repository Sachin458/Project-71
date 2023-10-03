import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBQoCiPZkPiyBtdSA1q8CON1ei_dnvQ4tU",
    authDomain: "e-ride-stage-4-9f6de.firebaseapp.com",
    projectId: "e-ride-stage-4-9f6de",
    storageBucket: "e-ride-stage-4-9f6de.appspot.com",
    messagingSenderId: "128281356212",
    appId: "1:128281356212:web:51e8a774652f9c01abf4e1"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
