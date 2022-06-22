import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const campersCollection = collection(db, "campers");

export function addCamper(data) {
 
  return addDoc(campersCollection, {
    ...data,
    createdAt: serverTimestamp(),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

