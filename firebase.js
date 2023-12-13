import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrgqcvQe2lmM6qGsXtO70Q8_n6pgYtADc",
  authDomain: "gdrive-5f62c.firebaseapp.com",
  databaseURL: "https://gdrive-5f62c-default-rtdb.firebaseio.com",
  projectId: "gdrive-5f62c",
  storageBucket: "gdrive-5f62c.appspot.com",
  messagingSenderId: "169323024362",
  appId: "1:169323024362:web:e2bed7b9db47cabdb56c93"
};


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const firestore = getFirestore(app);

  export { auth,storage,firestore };