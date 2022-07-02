import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../firebase";

export function getCampersByUserId(userid) {
  const q = query(collection(db, "campers"), where("campertype", "==", userid));
  return getDocs(q)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
