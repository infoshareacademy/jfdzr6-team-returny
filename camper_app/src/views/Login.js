import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { getFormData } from "../utilities/getFormData";
import { AuthForm } from "../components/AuthForm/AuthForm";


export const Login = () => {
    const handleLogin = (e) => {
      e.preventDefault();
      const { email, password } = getFormData(e,'login');
      console.log(email,password)
      signInWithEmailAndPassword(auth, email, password)
        .then((jwt) => {
          e.target.reset();
          console.log(jwt);
        })
        .catch((e) => {
            console.log(e.code);
            console.log(e.message);
        //   alert(firebaseErrors[e.code]);
        });
    };
  
    return <AuthForm formRole="login" onSubmit={handleLogin} />;
  };