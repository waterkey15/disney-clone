// Import the functions you need from the SDKs you need
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoBpgq8xuY6EQywfIPzChumYPRj5KP6kI",
    authDomain: "disney-plus-clone-d3ceb.firebaseapp.com",
    projectId: "disney-plus-clone-d3ceb",
    storageBucket: "disney-plus-clone-d3ceb.appspot.com",
    messagingSenderId: "134975406139",
    appId: "1:134975406139:web:388f8feda67ac744179c1e",
    measurementId: "G-KJHJ05KQFG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;