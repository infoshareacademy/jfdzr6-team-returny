import { db } from "../../firebase";
import { updateDoc, doc} from "firebase/firestore";

export function addNewComment(com, id) {
    const docRef = doc(db, "comments", id);
   return updateDoc(docRef, com);
  }