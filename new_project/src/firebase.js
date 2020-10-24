import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA9JwPpSe2naBwEyXQnxmTq010wODRJLEw",
    authDomain: "clone-a3251.firebaseapp.com",
    databaseURL: "https://clone-a3251.firebaseio.com",
    projectId: "clone-a3251",
    storageBucket: "clone-a3251.appspot.com",
    messagingSenderId: "926638230504",
    appId: "1:926638230504:web:0b3581cc72e05b357ab25d",
    measurementId: "G-NDGHLM7YLQ"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };