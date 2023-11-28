// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDALIz6XikDAosN0uZZ5oVX9iCvQBCoGps",
    authDomain: "mernventory.firebaseapp.com",
    projectId: "mernventory",
    storageBucket: "mernventory.appspot.com",
    messagingSenderId: "459107746194",
    appId: "1:459107746194:web:e1786723bd2efdf724814b",
    measurementId: "G-H3S064HQZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
export default app
