import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const campersCollection = collection(db, "campers");

export function sendCamper(data, userId, userEmail) {
  console.log(data);
  return addDoc(campersCollection, {
    ...data,
    userid: userId,
    useremail: userEmail,
    createdAt: serverTimestamp(),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
