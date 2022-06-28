import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export function deleteCamper(id) {
  const docRef = doc(db, "campers", id);
 return deleteDoc(docRef);
}
