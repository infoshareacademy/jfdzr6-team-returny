import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm} from "./views/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";

import { Home } from "./views/Home";
import Footer from "./components/Footer";
import {CamperCard} from "./components/CamperCard";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <>

    <Home/>
      <BrowserRouter>
        <NavBar />
         <NotificationContainer />
        
        <Routes>
        <Route path="/allcampers" element={<CamperCard/>}/>
          <Route path="/" element={<Home/>}/>
          
          <Route path="addcamper" element={<AddCamperForm />}/>
          <Route path="allcampers" element={<CamperCard/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </>
  );
}

export default App;
