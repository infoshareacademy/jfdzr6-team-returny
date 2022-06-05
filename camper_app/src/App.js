import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm } from "./components/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AddCamperForm />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
