// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk49VtHL3CxjqFi70_PTzKbae0XbqEjSU",
    authDomain: "bike-warehouse-managemen-3bdbe.firebaseapp.com",
    projectId: "bike-warehouse-managemen-3bdbe",
    storageBucket: "bike-warehouse-managemen-3bdbe.appspot.com",
    messagingSenderId: "583845853073",
    appId: "1:583845853073:web:621dabb93f259abbf64c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;