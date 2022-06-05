import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm } from "./views/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="addcamper" element={<AddCamperForm />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
