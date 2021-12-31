import firebase from 'firebase/compat/app';

import "firebase/compat/auth";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyAm5cWkL3so9ohR63lz4C3_6g5GdiN93QU",
    authDomain: "meusanunciosml.firebaseapp.com",
    projectId: "meusanunciosml",
    storageBucket: "meusanunciosml.appspot.com",
    messagingSenderId: "475411510991",
    appId: "1:475411510991:web:eabf6da24300db895b69ba"
  };

 
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database().ref();