import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

export function getCommentsByCapmerId(id) {
    const docRef = doc(db, "comments", id);

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