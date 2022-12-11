import firebase from "firebase/compat/app"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAYAHiDvtSMCqScPmJOZKfQ79Iif8uzDjY",
  authDomain: "chat-b97e8.firebaseapp.com",
  projectId: "chat-b97e8",
  storageBucket: "chat-b97e8.appspot.com",
  messagingSenderId: "828475292466",
  appId: "1:828475292466:web:e9d2070965fc34448fb52b",
  measurementId: "G-1SK9ZC6WPG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const FAB = new firebase.auth.FacebookAuthProvider(); 
 const GAP = new firebase.auth.GoogleAuthProvider();

const auth=firebase.auth();
export { auth ,FAB, GAP ,  }
 
 



 
