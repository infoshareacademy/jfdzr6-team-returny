import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { getFormData } from "../utilities/getFormData";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { getUserById } from "../api/getUserById";


export const Login = () => {
    const navigate=useNavigate();
    const context=useContext(UserContext);
    const handleLogin = (e) => {
      e.preventDefault();
      const { email, password } = getFormData(e,'login');
      console.log(email,password)
      signInWithEmailAndPassword(auth, email, password)
        .then((jwt) => {
          e.target.reset();
          console.log(jwt.user.uid);
          getUserById(jwt.user.uid).then(userData=>{
            console.log(userData);
            context.setUserData({
                id:jwt.user.uid,
                ...userData
            })
            navigate('/find-camper');
          })

        })
        .catch((e) => {
            console.log(e.code);
            console.log(e.message);
        //   alert(firebaseErrors[e.code]);
        });
    };
  
    return <AuthForm formRole="login" onSubmit={handleLogin} />;
  };