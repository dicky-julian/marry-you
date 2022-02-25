import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyAsXcRRYbgNwRgDVq9RhGdCborcnLv-pE8",
//   authDomain: "rhesa-oriettha.firebaseapp.com",
//   databaseURL:
//     "https://rhesa-oriettha-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "rhesa-oriettha",
//   storageBucket: "rhesa-oriettha.appspot.com",
//   messagingSenderId: "204488760088",
//   appId: "1:204488760088:web:3d98216204e3c5bf251c6d",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAHlnqWbY70OCfH6jkJZBfo_CvXdLnasYc",
  authDomain: "rhesa-oriettha-649fb.firebaseapp.com",
  databaseURL:"https://rhesa-oriettha-649fb-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "rhesa-oriettha-649fb",
  storageBucket: "rhesa-oriettha-649fb.appspot.com",
  messagingSenderId: "810038219664",
  appId: "1:810038219664:web:b1ea065f5359141bfd1915"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// export const database = getFirestore(app)
