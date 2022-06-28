import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const campersCollection = collection(db, "booking");

export function addReservation(data,totalCost,rentalDuration) {
 
  return addDoc(campersCollection, {
    ...data,
    totalCost:totalCost,
    rentalDuration:rentalDuration,
    createdAt: serverTimestamp(),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
