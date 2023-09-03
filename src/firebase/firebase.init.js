import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {firebase_apiKey,firebase_authDomain,firebase_projectId,firebase_storageBucket,firebase_messagingSenderId,firebase_appId} from "@/helpers/settings"
// import { getAuth } from "firebase/auth";

const initializeConfigue = () => {
    
    const firebaseConfig = {
        apiKey: firebase_apiKey,
        authDomain:firebase_authDomain,
        projectId: firebase_projectId,
        storageBucket: firebase_storageBucket,
        messagingSenderId:firebase_messagingSenderId,
        appId: firebase_appId,
    


        // apiKey: process.env.REACT_APP_API_KEY,
        // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
        // projectId: process.env.REACT_APP_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        // messagingSenderId:process.env.REACT_APP_MESSEGING_SENDER_ID,
        // appId: process.env.REACT_APP_APP_ID,
        // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

        
    };
    // console.log(process.env);
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    getAuth(app);
};

export default initializeConfigue;