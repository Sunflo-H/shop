import { getDatabase, ref, set, onValue } from "firebase/database";

export default class database {
  // process.env.firebaseConfig
  constructor() {
    firebaseConfig = {
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
  }
}
