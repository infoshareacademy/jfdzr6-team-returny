import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import { NavBar } from "./components/NavBar";
import { About } from "./views/About";
import { Home } from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>

    <div className="page-container">
    <div className="content-wrap">

    
    
    <Home/>
      <BrowserRouter>
        <NavBar />
        <Main/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
