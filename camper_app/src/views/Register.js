import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from '../firebase';
import { AuthForm } from "../components/AuthForm/AuthForm";

export function Register(){

    // const handleRegister = async (e) => {
    //     e.preventDefault();
    //     const {profilePicture, email, password,displayName } = form;
       
    
    //     try {
    
    //       const jwt= await createUserWithEmailAndPassword(auth, email, password,displayName);
    //     //   const snapshot=await uploadBytes(storageRef,profilePicture)
    //     //   console.log(snapshot);
    //     //   console.log(jwt)
    //     //   const downloadUrl=await getDownloadURL(snapshot.ref);
    //       const result =await setDoc(doc(db, "users", jwt.user.uid), {
    //         isAdmin: false,
    //         mobil:mobil,
    //         email: jwt.user.email,
    //         createdAt: serverTimestamp(),
           
    //       })
    //       console.log(result);
    //       await signOut(auth)
    //       e.target.reset();
    //     } catch (err){
    
    //       console.log(e);
    //       alert(FirebaseError[e.code])
    //     }
    //   } 


    return(

        <>
        <AuthForm/>
        </>

    )
}