import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcOOCzLJXLvkyGSqif27QUgRju6Ffg2J0",
  authDomain: "react-blog-f7a3e.firebaseapp.com",
  projectId: "react-blog-f7a3e",
  storageBucket: "react-blog-f7a3e.appspot.com",
  messagingSenderId: "284560511530",
  appId: "1:284560511530:web:ccca7c33983593c84ae953"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;