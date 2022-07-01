import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export function updateCamper(id,price,description) {
  const docRef = doc(db, "campers", id);
 return updateDoc(docRef,{
    price:price,
    description:description
 }).then(res=>console.log(res)).catch(er=>console.log(er));
}