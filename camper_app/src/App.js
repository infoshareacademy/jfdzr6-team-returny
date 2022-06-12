import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm} from "./views/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { CamperCard } from "./components/CamperCard";
import { NotificationContainer } from "react-notifications";
import { LoginRegister } from "./views/LoginRegister/LoginRegister";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NotificationContainer />
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
          <Route path="find-camper" element={<CamperCard/>}/>
          <Route path="contact" element={<Home/>}/>
          <Route path="insurance" element={<Home/>}/>
          <Route path="login" element={<Home/>}/>
          <Route path="add-camper" element={<AddCamperForm />}/>
          <Route path="login-register" element={<LoginRegister />}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
      
      
    </>
  );
}

