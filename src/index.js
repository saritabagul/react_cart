import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKvFSxrkwxhlx0lLV5hQ3_dj8oJHRMAN8",
  authDomain: "cart-d2746.firebaseapp.com",
  projectId: "cart-d2746",
  storageBucket: "cart-d2746.appspot.com",
  messagingSenderId: "1083131224902",
  appId: "1:1083131224902:web:b4bad9d0d70f568727fb47"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


