import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGq8iT7fSgNt9XYYpxhSJNTRsY88HHtB4",
  authDomain: "firegram-11e3a.firebaseapp.com",
  projectId: "firegram-11e3a",
  storageBucket: "firegram-11e3a.appspot.com",
  messagingSenderId: "157818592342",
  appId: "1:157818592342:web:b14a6b86ee69e5bc7feff7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
