import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDq4wx0_gaWP00HQF6ttZd2lC2vAP2WtxU",
  authDomain: "whatssap-clone-7b7a6.firebaseapp.com",
  projectId: "whatssap-clone-7b7a6",
  storageBucket: "whatssap-clone-7b7a6.appspot.com",
  messagingSenderId: "1009394047534",
  appId: "1:1009394047534:web:d2917d415ddd43e87c5dbf",
  measurementId: "G-LKMQGJZDSE"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db