import { BrowserRouter, Route, Routes} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";
import Footer from "./components/Footer";
import CamperCard from "./components/CamperCard";

function App() {
  return (
    <>

    <Home/>
      <BrowserRouter>
        <NavBar />
        <CamperCard/>
        <Routes>
        <Route path="/allcampers" element={<CamperCard/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </>
  );
}

export default App;
