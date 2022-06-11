import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm} from "./view/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";
import Footer from "./components/Footer";
import CamperCard from "./components/CamperCard";
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
          <Route path="about" element={<About/>}/>
          <Route path="addcamper" element={<AddCamperForm />}/>
          <Route path="allcampers" element={<AllCampers/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </>
  );
}

export default App;
