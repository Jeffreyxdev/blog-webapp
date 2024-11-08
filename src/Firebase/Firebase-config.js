// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB879ZVX1GXTy84RwLj53xvmmjtDnmtXXE",
  authDomain: "blog-webapp-d937e.firebaseapp.com",
  projectId: "blog-webapp-d937e",
  storageBucket: "blog-webapp-d937e.firebasestorage.app",
  messagingSenderId: "455432544433",
  appId: "1:455432544433:web:eae2aa9f62901a8d3d4290"
};


// Initialize Firebas const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()
export default app;