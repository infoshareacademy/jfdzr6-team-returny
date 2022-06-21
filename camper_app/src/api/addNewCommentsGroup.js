import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export function addNewCommentsGroup(camperId) {
  return setDoc(doc(db, "comments", camperId), {
    startComments: true,
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
