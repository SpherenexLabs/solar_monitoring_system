// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi4imuMT5imCT-8IBULdyFqj-ZZtl68Do",
  authDomain: "regal-welder-453313-d6.firebaseapp.com",
  databaseURL: "https://regal-welder-453313-d6-default-rtdb.firebaseio.com",
  projectId: "regal-welder-453313-d6",
  storageBucket: "regal-welder-453313-d6.firebasestorage.app",
  messagingSenderId: "981360128010",
  appId: "1:981360128010:web:5176a72c013f26b8dbeff3",
  measurementId: "G-T67CCEJ8LW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database, analytics };
export default app;