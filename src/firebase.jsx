import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_6zisuninjvFJo8GnxGutU9GSkPT2l5M",
  authDomain: "portfolio-520cc.firebaseapp.com",
  databaseURL: "https://portfolio-520cc-default-rtdb.firebaseio.com",
  projectId: "portfolio-520cc",
  storageBucket: "portfolio-520cc.firebasestorage.app",
  messagingSenderId: "802400218776",
  appId: "1:802400218776:web:26a871bec06efa29b7eaed",
  measurementId: "G-LP0Y2FY36Y"
};

const app = initializeApp(firebaseConfig);

export default app;