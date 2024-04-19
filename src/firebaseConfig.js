// import firebase from "firebase/app";
// import "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBWYhW1v5ihah_48rKZvQoXLTumzCxvhq8",
//   authDomain: "pyarena-91d35.firebaseapp.com",
//   databaseURL:
//     "https://pyarena-91d35-default-rtdb.europe-west1.firebasedatabase.app/",
//   projectId: "pyarena-91d35",
//   storageBucket: "pyarena-91d35.appspot.com",
//   messagingSenderId: "827209140628",
//   appId: "1:827209140628:web:4db30ac6d56775b8832781",
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// // // Write data
// // database.ref("path/to/data").set({
// //   key: value,
// // });

// // // Read data
// // database.ref("path/to/data").on("value", (snapshot) => {
// //   const data = snapshot.val();
// // });

// export { database };

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBkm8k6noF7uMzi39MIxjTCQaf1fyK45c",
  authDomain: "vue-test-ff007.firebaseapp.com",
  databaseURL:
    "https://vue-test-ff007-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-test-ff007",
  storageBucket: "vue-test-ff007.appspot.com",
  messagingSenderId: "765032449859",
  appId: "1:765032449859:web:1a11bde9c4e332a0dd11f6",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
