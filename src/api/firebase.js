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
const db = getDatabase(app);

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

export function onUserStateChange(setUser, setIsAdmin) {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
    user ? isAdmin(user, setIsAdmin) : setIsAdmin(false);
  });
}

// 데이터베이스로부터 admin 을 가져오는 것부터 해보자

function isAdmin(user, setIsAdmin) {
  const dbRef = ref(db, "admins/");
  onValue(dbRef, (snapshot) => {
    const uidList = snapshot.val();
    setIsAdmin(uidList.find((uid) => uid === user.uid) ? true : false);
  });
}
