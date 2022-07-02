import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
import { AddCamperForm } from "./views/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { CamperCard } from "./views/CamperCard/CamperCard";
import { NotificationContainer } from "react-notifications";
import { PreviewCamp } from "./views/PreviewSingleCamp/PreviewCamp";
import { Campers } from "./views/Campers";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { ForgotPassword } from "./views/ForgotPass";
import { getUserById } from "./api/getUserById";
import { Calendar } from "./components/calendar/Calendar";
import {Contact} from "./views/Contactpage/Contact"
import {About} from "./views/About/About"
import {Insurance} from "./views/InsurancePage/Insurance"

export function App() {
  const context = useContext(UserContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth status changed", user);
      if (user) {
        getUserById(user.uid).then((userData) => {
          context.setUserData({
            id: user.uid,
            ...userData,
          });
        });
      } else {
        console.log("nie jestes zalogowany");
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <NotificationContainer />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpass" element={<ForgotPassword />} />

          <Route path="contact" element={<Contact />} />
          <Route path="insurance" element={<Insurance />} />

          <Route path="calendar" element={<Calendar />} />

          <Route
            path="add-camper"
            element={context.userData ? <AddCamperForm /> : <Home />}
          />

          <Route path="find-camper" element={<Campers />}>
            <Route index element={<CamperCard />} />
            <Route path=":id" element={<PreviewCamp />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
