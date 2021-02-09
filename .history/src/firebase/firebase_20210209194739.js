import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMRiHZdV22y5Uyju7HnFqzOTDBvvw_rK8",
    authDomain: "chat-8000c.firebaseapp.com",
    projectId: "chat-8000c",
    storageBucket: "chat-8000c.appspot.com",
    messagingSenderId: "691151716239",
    appId: "1:691151716239:web:9f7c49215ded2e730255fa",
    measurementId: "G-M90FDPB0G6"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase
  export const firestore = firebase.firestore();
  export const provider= new firebase.auth.GoogleAuthProvider()
  export const auth = firebase.auth()