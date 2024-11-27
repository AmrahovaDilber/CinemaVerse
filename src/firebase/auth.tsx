import { GoogleAuthProvider } from "firebase/auth/web-extension";

import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./config";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};


export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  

export const doSignInWithGoogle = async() => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
}

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

export const doSignOut = () => {
    return auth.signOut()
}
