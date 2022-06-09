import { BrowserRouter, Route, Routes} from "react-router-dom";
import { AddCamperForm } from "./views/AddCamperForm/AddCamperForm";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";
import {AllCampers} from "./views/AllCampres";
import { NotificationContainer} from 'react-notifications';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NotificationContainer />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="addcamper" element={<AddCamperForm />}/>
          <Route path="allcampers" element={<AllCampers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
