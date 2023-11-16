// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFsy5g-7NBgQ02als4W4NhllhVZdFtk9I",
  authDomain: "mnbet-2f82c.firebaseapp.com",
  projectId: "mnbet-2f82c",
  storageBucket: "mnbet-2f82c.appspot.com",
  messagingSenderId: "873154427676",
  appId: "1:873154427676:web:636d79f0f4c18a87ddd8d9",
  measurementId: "G-W1K4YJ9YQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const gooogleSignUpHundler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((data) => {
      localStorage.setItem("accesstoken", data.user.accessToken);
      localStorage.setItem("userid", data.user.uid);
    })
    .catch((error) => {
      console.log(error);
    });
};
