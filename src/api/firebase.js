import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  setPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
console.log(auth);

// 매번 로그인 할 때마다 유저를 선택하는 옵션
provider.setCustomParameters({
  prompt: "select_account",
});

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

// * 처음으로 콜백함수를 받는 함수를 사용해봤다.
// onAuthStateChanged가 있으므로 login과 logout은 user값을 반환하지 않고,
// 로그인해줘! 로그아웃해줘! 이런 명령을 하는 역할만 한다.
// 로그인한 user의 값을 얻고싶다면 onAuthStateChanged에서 return해서 사용하자
export function onUserStateChange(callback_setUser) {
  // auth를 인자로 받고,
  // '로그인중인 사용자 정보'를 콜백함수의 인자로 전달하는 함수
  // 나는 '로그인중인 사용자 정보'를 받은 콜백함수에서 이 정보를 다루면 된다.
  onAuthStateChanged(auth, (user) => {
    callback_setUser(user);
  });
}

// export function writeProductData(
//   productIndex,
//   productId,
//   imageUrl,
//   name,
//   price,
//   category,
//   description
// ) {
//   set(ref(this.database, "products/" + productIndex), {
//     productId,
//     imageUrl,
//     name,
//     price,
//     category,
//     description,
//   });
//   console.log("성공");
// }
