// FireBase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";

export default class Firebase {
  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyA2j29NglIjYUeKh_hnOABuRAIyvXYShjg",
      authDomain: "shop-cc77d.firebaseapp.com",
      databaseURL:
        "https://shop-cc77d-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "shop-cc77d",
      storageBucket: "shop-cc77d.appspot.com",
      messagingSenderId: "960255437665",
      appId: "1:960255437665:web:fd341b2e3ac603b2c53320",
      measurementId: "G-W4WHT0MQ5N",
    };
    this.app = initializeApp(this.firebaseConfig);
    this.database = getDatabase(this.app);
  }

  writeProductData(productId, imageUrl, name, price, category, description) {
    set(ref(this.database, "products/" + productId), {
      imageUrl,
      name,
      price,
      category,
      description,
    });
    console.log("성공");
  }
}

// const firebaseConfig = {
//   apiKey: "AIzaSyA2j29NglIjYUeKh_hnOABuRAIyvXYShjg",
//   authDomain: "shop-cc77d.firebaseapp.com",
//   databaseURL:
//     "https://shop-cc77d-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "shop-cc77d",
//   storageBucket: "shop-cc77d.appspot.com",
//   messagingSenderId: "960255437665",
//   appId: "1:960255437665:web:fd341b2e3ac603b2c53320",
//   measurementId: "G-W4WHT0MQ5N",
// };
// const auth = getAuth(app);
// const email = "email@gmail.com";
// const password = "123123asdasd";
// const database = getDatabase(app);

// // 신규유저
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ..
//   });

// // 기존 사용자 로그인
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// function writeUserData(userId, name, email, imageUrl) {
//   // const db = getDatabase();
//   set(ref(database, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl,
//   });
//   console.log("성공");
// }

// function writeProductData(productId, name, imageUrl) {
//   set(ref(database, "products/" + productId), {
//     name: name,
//     image: imageUrl,
//   });
//   console.log("성공");
// }

// function readProductData() {
//   const productRef = ref(database, "products/" + 1);
//   onValue(productRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//     return data;
//   });
// }

// //get product
// const dbRef = ref(getDatabase());
// get(child(dbRef, `products/10`)) //product Id
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
