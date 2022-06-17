import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../firebase";
import { getFormData } from "../utilities/getFormData";
import { AuthForm } from "../components/AuthForm/AuthForm";


export const ForgotPassword = () => {
    const navigate = useNavigate();
    const handlePasswordReset = (e) => {
      e.preventDefault();
      const { email } = getFormData(e, 'forgotPassword');
  console.log(email);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          e.target.reset();
          alert("Przypomnienie hasła zostało wysłane na Twojego maila!");
          navigate("/");
        })
        .catch((e) => {
            console.log(e);
        //   alert(firebaseErrors[e.code]);
        });
    };
  
    return (
      <AuthForm formRole="forgotPassword" onSubmit={handlePasswordReset}/>
    );
  };
  