import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../firebase";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { getFormData } from "../utilities/getFormData";
import {auth} from '../firebase';
import { serverTimestamp, doc, setDoc } from "firebase/firestore";


export function Register() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const { profilePicture, email, password, displayName } = getFormData(
      e,
      "register"
    );

    try {
      const jwt = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      );
      //   const snapshot=await uploadBytes(storageRef,profilePicture)
      //   console.log(snapshot);
      //   console.log(jwt)
      //   const downloadUrl=await getDownloadURL(snapshot.ref);
      const result = await setDoc(doc(db, "users", jwt.user.uid), {
        isAdmin: false,
        mobil: '123456789',
        email: jwt.user.email,
        createdAt: serverTimestamp(),
      });
      console.log(result);
      await signOut(auth);
      e.target.reset();
    } catch (err) {
      console.log(e);
      //   alert(FirebaseError[e.code])
    }
  };

  return (
    <>
      <AuthForm formRole="register" onSubmit={handleRegister} />
    </>
  );
}
