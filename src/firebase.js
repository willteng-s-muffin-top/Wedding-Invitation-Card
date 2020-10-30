import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  apiKey: "AIzaSyBs8-uVq7WHPlcEgXe8TMQJVj7MIwaTCTc",
  authDomain: "wedding-invitation-card-807e4.firebaseapp.com",
  databaseURL: "https://wedding-invitation-card-807e4.firebaseio.com",
  projectId: "wedding-invitation-card-807e4",
  storageBucket: "wedding-invitation-card-807e4.appspot.com",
  messagingSenderId: "956955614275",
  appId: "1:956955614275:web:cc21e805b62d1e02e348f6",
  measurementId: "G-JXENKM28TP"
});

const db = firebaseApp.firestore();

export { db };

