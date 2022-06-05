import { useState, useEffect } from "react";
import {
  getDocs,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  collection,
  doc,
  serverTimestamp,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAllCampers,getAllCampersSnapshot } from "../api/getAllCampers";
const campersCollection = collection(db, "campers");
export function AllCampers() {
  const [campers, setCampers] = useState([]);


  useEffect(() => {
    // getAllCampers().then(data=>console.log(data)).catch(err=>console.log(err));

    onSnapshot(
      query(campersCollection, orderBy("createdAt", "desc")),
      (querySnapshot) => {
        const allCampers = getAllCampersSnapshot(querySnapshot);
        setCampers(allCampers);
      }
    );
  }, []);
console.log(campers)
  return (
    <>
      <h2>Wszystkie Campery</h2>
    </>
  );
}
