// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8i-CJe287_jwdqJktOgi_ONYMfKMsNsg",
  authDomain: "netflixgpt-69ca1.firebaseapp.com",
  projectId: "netflixgpt-69ca1",
  storageBucket: "netflixgpt-69ca1.appspot.com",
  messagingSenderId: "808876768017",
  appId: "1:808876768017:web:db904c92acfadc04f6eab0",
  measurementId: "G-79L8LZNHBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();