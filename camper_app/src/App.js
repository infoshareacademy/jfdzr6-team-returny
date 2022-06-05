import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm } from "./components/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";
import {AllCampers} from "./views/AllCampres";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AddCamperForm />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="allcampers" element={<AllCampers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
