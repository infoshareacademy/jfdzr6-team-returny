import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

export function getCamperById(id) {
  const docRef = doc(db, "campers", id);

  return getDoc(docRef)
    .then((querySnapshot) =>{
    console.log(querySnapshot.data()) 
      
        return {
        id: querySnapshot.id,
        ...querySnapshot.data(),
      };
    
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
