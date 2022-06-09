import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const campersCollection = collection(db, "campers");

export function addCamper(data, userId="12345", userEmail="user@user.com",userTlf="660777888") {
  console.log(data);
  return addDoc(campersCollection, {
    ...data,
    userid: userId,
    useremail: userEmail,
    usertlf:userTlf,
    createdAt: serverTimestamp(),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
