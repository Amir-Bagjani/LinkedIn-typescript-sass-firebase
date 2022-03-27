import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCXs3Xezn1eK85W1wNX5rIrTdMfboKG5fU",
    authDomain: "linkedin-clone-dddae.firebaseapp.com",
    projectId: "linkedin-clone-dddae",
    storageBucket: "linkedin-clone-dddae.appspot.com",
    messagingSenderId: "172633848972",
    appId: "1:172633848972:web:4428cd8a01abd59fbccfa9"
};

//initiali 
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const authGoogle = new firebase.auth.GoogleAuthProvider();

export {db, storage, auth, authGoogle};