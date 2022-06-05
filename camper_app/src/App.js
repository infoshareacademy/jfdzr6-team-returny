import { BrowserRouter, Route, Routes} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";
import {AllCampers} from "./views/AllCampres";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
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
