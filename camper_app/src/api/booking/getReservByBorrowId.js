import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../firebase";

export function getReservByBorrowId(borrowerid,camperid) {
  const q = query(collection(db, "booking"), where("borrowerid", "==", borrowerid), where("camperid","==",camperid));
  return getDocs(q)
    .then((querySnapshot) => {
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    })
    .then((data) => {
     
      return data;
    });
}