import { initializeApp } from "firebase/app";

import { getAuth }  from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD10W5PqJ_zA1Q_Cuprv5aaEkIRjgDT09Y",
  authDomain: "react-expensetracker-2c937.firebaseapp.com",
  projectId: "react-expensetracker-2c937",
  storageBucket: "react-expensetracker-2c937.appspot.com",
  messagingSenderId: "222044915858",
  appId: "1:222044915858:web:066a45dc8c05a4c538fe4b",
  measurementId: "G-2XYMRM005B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
