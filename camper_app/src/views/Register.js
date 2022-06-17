import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../firebase";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { getFormData } from "../utilities/getFormData";
import { auth } from "../firebase";
import { serverTimestamp, doc, setDoc } from "firebase/firestore";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

export function Register() {
  const navigate=useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const { profilePicture, email, password, displayName, telephone } =
      getFormData(e, "register");

    try {
      const jwt = await createUserWithEmailAndPassword(auth, email, password);
      //Avator opcja
      //   const snapshot=await uploadBytes(storageRef,profilePicture)
      //   console.log(snapshot);
      //   console.log(jwt)
      //   const downloadUrl=await getDownloadURL(snapshot.ref);
      console.log(jwt.user.uid,displayName,telephone);
      console.log("jwt dane:", jwt);
      const result = await setDoc(doc(db, "users", jwt.user.uid), {
        isAdmin: false,
        name: displayName,
        mobil: telephone,
        email: jwt.user.email,
        createdAt: serverTimestamp(),
      });
      navigate('/login');
      console.log(result);
      await signOut(auth);
      e.target.reset();
      NotificationManager.info(`Twoje konto: ${jwt.user.email} zostało utworzone`);
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
