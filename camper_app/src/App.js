import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { AddCamperForm } from "./views/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { CamperCard } from "./components/CamperCard";
import { NotificationContainer } from "react-notifications";
import { PreviewCamp } from "./views/PreviewSingleCamp/PreviewCamp";
import { Campers } from "./views/Campers";
import { Register } from "./views/Register";
import { Login } from "./views/Login";

export function App() {
  const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("auth status changed", user);
  //     if (user) {
  //       setIsAuth(true);

  //       console.log("current user", user);
  //       //pobranie danych konkretnego uzytkownika
  //       const docRef = doc(db, "users", user.uid);
  //       getDoc(docRef).then((docSnap) => {
  //         const extendDataUser = docSnap.data();
  //         //dodanie do kontekstu rozszerzonych danych usera
  //         context.setExtendedUserData(extendDataUser);
  //         //dodanie do kontekstu usera
  //         context.setUserData(user);
  //       });
  //     } else {
  //       setIsAuth(false);
       
  //     }
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NotificationContainer />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
         
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          <Route path="contact" element={<Home />} />
          <Route path="insurance" element={<Home />} />
          
          <Route path="add-camper" element={<AddCamperForm />} />

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
