import { db } from "../../firebase";
import { addDoc,collection} from "firebase/firestore";

export function addComment(comment) {
    const commentsCollection = collection(db, "comments2");
    return addDoc(commentsCollection, comment);
  }