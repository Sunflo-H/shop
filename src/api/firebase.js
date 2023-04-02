import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 as uuid } from "uuid";

// 내 Firebase 계정의 정보
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
const auth = getAuth(); // 인증 기능
const db = getDatabase(app); // 실시간 데이터베이스 기능

// 로그인 할 때마다 유저를 선택하는 옵션
provider.setCustomParameters({
  prompt: "select_account",
});

// * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 인증 관련 함수들

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

/**
 *
 * @param {*} setUser
 *
 * - 인증 방법으로 로그인한 유저의 정보를 가져오는 함수
 */
export function onUserStateChange(setUser) {
  onAuthStateChanged(auth, async (user) => {
    const user_addAdminData = user && (await isAdmin(user));
    setUser(user_addAdminData); // 유저 정보 저장

    /*
     * setUser 는 콜백함수
     *  (user) => {
     *   setIsLoading(false);
     *   setUser(user);
     *  }
     */
  });
}

/**
 * @param {*} user
 * @returns user or user_addAdminData
 *
 * user.uid와 일치하는 값이 admins에 있는지 확인하여 있다면 user에 isAdmin 속성을 추가하여 반환하는 함수
 */
async function isAdmin(user) {
  try {
    const snapshot = await get(ref(db, `admins/`)); // DB에서 admins/ 경로의 데이터를 가져온다.
    if (snapshot.exists()) {
      const admins = snapshot.val();
      console.log(admins);
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin }; //유저 데이터에 isAdmin 속성 추가
    } else return user;
  } catch (error) {
    console.error(error);
  }
}

// * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DB 관련 함수들

export function uploadNewProduct(product, imageUrl) {
  const id = uuid();
  return set(ref(db, `products/${product.category}/${id}`), {
    ...product,
    id,
    imageUrl,
    price: Number(product.price),
    size: product.size.split(","),
    color: product.color.split(","),
  });
}

export async function getProduct(category) {
  try {
    const snapshot = await get(ref(db, `products/${category}`));
    if (snapshot.exists()) {
      const data = snapshot.val();
      let products = Object.values(data); // data객체의 value만 가져온다.
      return products;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}

export function uploadCart(product, uid) {
  set(ref(db, `carts/${uid}/${product.id}`), product);
}

export async function getCart(uid) {
  try {
    const snapshot = await get(ref(db, `carts/${uid}`));

    if (snapshot.exists()) {
      const data = snapshot.val();

      let carts = Object.values(data);

      return carts;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
}

export async function removeCartItem(product, uid) {
  return remove(ref(db, `carts/${uid}/${product.id}`));
}
