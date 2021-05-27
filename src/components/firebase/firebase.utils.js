import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyAKx8M5YmO3miUY_2yLmJx-d7bFvaDQSXM",
  authDomain: "crown-db-bc24d.firebaseapp.com",
  projectId: "crown-db-bc24d",
  storageBucket: "crown-db-bc24d.appspot.com",
  messagingSenderId: "837291865882",
  appId: "1:837291865882:web:cfb0e28a23ba6d90405ea3",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
