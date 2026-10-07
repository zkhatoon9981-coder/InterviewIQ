import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-b6ba9.firebaseapp.com",
  projectId: "fir-b6ba9",
  storageBucket: "fir-b6ba9.firebasestorage.app",
  messagingSenderId: "1055685282874",
  appId: "1:1055685282874:web:0c0009f7864c48531b7903",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };
