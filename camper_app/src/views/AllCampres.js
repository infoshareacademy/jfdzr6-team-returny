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

const campersCollection = collection(db, "campers");
export function AllCampers() {
const [campers, setCampers] = useState([]);

  function AllCampers() {
    getDocs(campersCollection)
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      })
      .then((data) => {
        setCampers(data);
        console.log(data);
      });
  }

  useEffect(() => {
    AllCampers();
    // onSnapshot(
    //   query(campersCollection, orderBy("createdAt", "desc")),
    //   (querySnapshot) => {
    //     const campersFromApi = getNotes(querySnapshot);
    //     setNotes(notes);
    //   }
    // );
  }, []);

  return (
    <>
      <h2>Wszystkie Campery</h2>
    </>
  );
}
