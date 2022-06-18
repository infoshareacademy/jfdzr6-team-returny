import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

export function getUserById(id) {
  const docRef = doc(db, "users", id);

  return getDoc(docRef)
    .then((querySnapshot) => {
      return {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
    })
    .then((data) => {
      return data;
    });
}
