import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyArm9CcIAsx3zLhpFhN4IU2PnQQ4bO6bF8',
  authDomain: 'zabal-si.firebaseapp.com',
  projectId: 'zabal-si',
  storageBucket: 'zabal-si.appspot.com',
  messagingSenderId: '637072304106',
  appId: '1:637072304106:web:5dcac3fbd6a32c99aa7493',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
