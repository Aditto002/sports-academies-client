// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPqDOSbb2ZNwoT7r4cK_lffOD_-TanjhU",
  authDomain: "sprots-academies.firebaseapp.com",
  projectId: "sprots-academies",
  storageBucket: "sprots-academies.appspot.com",
  messagingSenderId: "362050363623",
  appId: "1:362050363623:web:98f3eaec408d8d28778242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;