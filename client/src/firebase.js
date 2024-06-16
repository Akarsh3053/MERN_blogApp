import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-95896.firebaseapp.com",
  projectId: "mern-blog-95896",
  storageBucket: "mern-blog-95896.appspot.com",
  messagingSenderId: "1066831675046",
  appId: "1:1066831675046:web:c853eab64bca9bb43bfe67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);