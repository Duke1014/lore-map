// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyqGI5iyXzDqQOG0JmYhTUnKgZSr1c3-8",
  authDomain: "lore-map.firebaseapp.com",
  projectId: "lore-map",
  storageBucket: "lore-map.appspot.com",
  messagingSenderId: "684202517503",
  appId: "1:684202517503:web:3075150fe72059b101bdca",
  measurementId: "G-VQEW5G65CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);