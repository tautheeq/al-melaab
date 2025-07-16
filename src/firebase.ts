
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPj9_RdmWsxu1KVfnaV_CBu9_kIX96mlE",
  authDomain: "al-melaab-ready.firebaseapp.com",
  projectId: "al-melaab-ready",
  storageBucket: "al-melaab-ready.firebasestorage.app",
  messagingSenderId: "678975089697",
  appId: "1:678975089697:web:1fe75390f010f6d2a60760"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
