import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../firebase";
import { getFormData } from "../utilities/getFormData";
import { AuthForm } from "../components/AuthForm/AuthForm";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";


export const ForgotPassword = () => {
    const navigate = useNavigate();
    const handlePasswordReset = (e) => {
      e.preventDefault();
      const { email } = getFormData(e, 'forgotPassword');
  console.log(email);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          e.target.reset();
          NotificationManager.success("Przypomnienie hasła zostało wysłane na Twojego maila!");
          
          navigate("/");
        })
        .catch((e) => {
            console.log(e);
            NotificationManager.error(e);
        //   alert(firebaseErrors[e.code]);
        });
    };
  
    return (
      <AuthForm formRole="forgotPassword" onSubmit={handlePasswordReset}/>
    );
  };
  