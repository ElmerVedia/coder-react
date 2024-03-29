import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-rvKgfn55ndYv595XuKiE4XDRl4gQF44",
  authDomain: "ecommerce-licoreria.firebaseapp.com",
  projectId: "ecommerce-licoreria",
  storageBucket: "ecommerce-licoreria.appspot.com",
  messagingSenderId: "454326781189",
  appId: "1:454326781189:web:2187ac6fe2e8c8a857a36c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
