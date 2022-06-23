import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

export function getCamperByTypeAndRegion(type, region) {
  const q = query(
    collection(db, "campers"),
    where("campertype", "==", type),
    where("location", "==", region)
  );
  return getDocs(q)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .then((data) => {
      return data;
    })
    .catch((er) => console.log(er));
}
