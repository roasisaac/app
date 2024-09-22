import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfcyk476UDIn5lL96lad_OTKQhhCqjVTk",
    authDomain: "substackui-clone.firebaseapp.com",
    projectId: "substackui-clone",
    storageBucket: "substackui-clone.appspot.com",
    messagingSenderId: "474347312439",
    appId: "1:474347312439:web:8c4a73d5d482c1f2ecf6b2",
    measurementId: "G-XT411GX979"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };