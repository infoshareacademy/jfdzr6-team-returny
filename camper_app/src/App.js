import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
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

export function App() {
  const context=useContext(UserContext);
  

  
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
          <Route path="forgotpass" element={<ForgotPassword />} />

          <Route path="contact" element={<Home />} />
          <Route path="insurance" element={<Home />} />
                  
          <Route path="add-camper" element={context.userData ? <AddCamperForm /> : <Home />} />

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
