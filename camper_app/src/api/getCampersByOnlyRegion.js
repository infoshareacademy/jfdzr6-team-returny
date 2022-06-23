import {db} from '../firebase';
import { getDocs, query, collection, where } from "firebase/firestore";


export function getCampersByOnlyRegion(region) {
    const q = query(collection(db, "campers"), where("location", "==", region));
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