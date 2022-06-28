import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export function deleteReservation(id) {
  const docRef = doc(db, "booking", id);
  deleteDoc(docRef);
}
