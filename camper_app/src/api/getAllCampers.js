import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const campersCollection = collection(db, "campers");

export function getAllCampers() {
  return getDocs(campersCollection)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

export const getAllCampersSnapshot = (querySnapshot) => {
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
