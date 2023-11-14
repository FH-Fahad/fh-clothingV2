import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDYq2_JGSTyrMj6kwxdWO_g0yRdKKGQEiI",
  authDomain: "fh-clothing-db.firebaseapp.com",
  projectId: "fh-clothing-db",
  storageBucket: "fh-clothing-db.appspot.com",
  messagingSenderId: "8041601354",
  appId: "1:8041601354:web:f3a8a772792a2ab24849b3",
  measurementId: "G-VXHW96775F",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const creaedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        creaedAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
