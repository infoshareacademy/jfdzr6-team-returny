import { db } from "../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

export function deleteComment(commentid) {
  const docRef = doc(db, "comments2", commentid);
  return deleteDoc(docRef)
}
