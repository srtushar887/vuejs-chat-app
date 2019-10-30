import firebase from "firebase/app";
import firestore from 'firebase/firestore';

const Config = {
  apiKey: "AIzaSyAKe4YLwb8yhiwg8DklxhRWipsnMGfdDEo",
  authDomain: "ninja-chat-a8791.firebaseapp.com",
  databaseURL: "https://ninja-chat-a8791.firebaseio.com",
  projectId: "ninja-chat-a8791",
  storageBucket: "ninja-chat-a8791.appspot.com",
  messagingSenderId: "93056843823",
  appId: "1:93056843823:web:b7a4a8f39d998e5a2446da",
  measurementId: "G-R5NCFSSVBC"
};

const firebaseApp = firebase.initializeApp(Config);
// firebaseApp.firestore().settings({timestampsInSnapshots :true});

export default firebaseApp.firestore();


