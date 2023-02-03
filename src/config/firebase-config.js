
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzgUk9XHpjdvLJsbM8eJ4dSIueX8N79Tg",
    authDomain: "p222-3a641.firebaseapp.com",
    projectId: "p222-3a641",
    storageBucket: "p222-3a641.appspot.com",
    messagingSenderId: "215101525187",
    appId: "1:215101525187:web:e001c22a692714d0a42676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export const database = {
    folders: collection(db, "folders"),
    files: collection(db, "files"),
    formattedDoc: (doc) => {
        return {...doc.data(), id: doc.id}
    }
}

export default db;
export { auth };