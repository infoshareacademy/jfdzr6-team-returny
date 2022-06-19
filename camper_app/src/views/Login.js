import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { getFormData } from "../utilities/getFormData";
import { AuthForm } from "../components/AuthForm/AuthForm";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e, "login");

    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        if (jwt) {
          e.target.reset();

          navigate("/find-camper");
        }
      })
      .catch((e) => {
        console.log(e.code);
        console.log(e.message);
        //   alert(firebaseErrors[e.code]);
      });
  };

  return <AuthForm formRole="login" onSubmit={handleLogin} />;
};
