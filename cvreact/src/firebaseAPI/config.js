import * as firebase from 'firebase'
import 'firebase/firebase-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyDp8xxssWH10qKD2UZAwcftU4JSnrues3Y",
    authDomain: "cvreact-cc906.firebaseapp.com",
    databaseURL: "https://cvreact-cc906.firebaseio.com",
    projectId: "cvreact-cc906",
    storageBucket: "cvreact-cc906.appspot.com",
    messagingSenderId: "123506321688",
    appId: "1:123506321688:web:a047d7cb9c032ddcae966d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;