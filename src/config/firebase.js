// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    const firebaseConfig = {
        apiKey: "AIzaSyDPP3N3wH_w607kUrKxCM3qlCoknltvGU8",
        authDomain: "test-papers-adea4.firebaseapp.com",
        projectId: "test-papers-adea4",
        storageBucket: "test-papers-adea4.appspot.com",
        messagingSenderId: "28091553644",
        appId: "1:28091553644:web:f22d0778b45dbd8e2e4549",
        measurementId: "G-HXC3855MTJ"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const fire=firebase.initializeApp(firebaseConfig)

export default fire;



