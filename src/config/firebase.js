import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsXcRRYbgNwRgDVq9RhGdCborcnLv-pE8",
  authDomain: "rhesa-oriettha.firebaseapp.com",
  databaseURL:
    "https://rhesa-oriettha-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rhesa-oriettha",
  storageBucket: "rhesa-oriettha.appspot.com",
  messagingSenderId: "204488760088",
  appId: "1:204488760088:web:3d98216204e3c5bf251c6d",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
