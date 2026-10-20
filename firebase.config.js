// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyACM7zUg7lHh4guBNKpGtrYUh_EpNS9_44",
  authDomain: "trabalho-reologia.firebaseapp.com",
  databaseURL: "https://trabalho-reologia-default-rtdb.firebaseio.com",
  projectId: "trabalho-reologia",
  storageBucket: "trabalho-reologia.firebasestorage.app",
  messagingSenderId: "655100498314",
  appId: "1:655100498314:web:767d7abc36c23ad94cf873",
  measurementId: "G-FF5SF7SD60"
};

const app = initializeApp(firebaseConfig);

// É ESTA LINHA QUE PERMITE O CRUD IMPORTAR O BANCO!
export const db = getDatabase(app);