import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKTFD-Q5wQnAerjdlPM7DEvi22sKbv1NA",
    authDomain: "fullstack-5aec8.firebaseapp.com",
    databaseURL: "https://fullstack-5aec8.firebaseio.com",
    projectId: "fullstack-5aec8",
    storageBucket: "",
    messagingSenderId: "733876844472",
    appId: "1:733876844472:web:21674a946cbc01a9"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();