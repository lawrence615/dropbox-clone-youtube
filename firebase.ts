import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlZuVB4j15fwd4dMcaM96AncJLW4PhsCY",
  authDomain: "dropbox-clone-78f65.firebaseapp.com",
  projectId: "dropbox-clone-78f65",
  storageBucket: "dropbox-clone-78f65.appspot.com",
  messagingSenderId: "36480903536",
  appId: "1:36480903536:web:24beea82a0383c595087b5",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // if the app is already initialized, just return. Otherwise initialize the app. i.e. singleton instance pattern
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
