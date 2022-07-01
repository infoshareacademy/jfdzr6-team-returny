import { useContext, React } from "react";
import './Main.css';
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

export const Main = ()=>{

    const context = useContext(UserContext);

        return(

         <main>
            <div className="main-overlay">
                <div className="container_main">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>WYPOŻYCZ Z NAMI CAMPERA!</h2>
                            <p>Kamper (ang. camper) lub samochód kempingowy to autonomiczny, zintegrowany samochód turystyczny, specjalnie w tym celu zbudowany lub wyposażony, zapewniający podróżującym nim pasażerom miejsca do spania i wypoczynku.</p>
                            


        {context.userData && (
          <>
          {/* <Button> <Link to="/" onClick={()=>{
            signOut(auth); 
            context.setUserData('');
            NotificationManager.info("Zostałeś wylogowany");
          }}> Wyloguj się</Link></Button> */}
          <button> <Link to="/add-camper"> Dodaj campera</Link> </button>
          </>
        )}
        {!context.userData && (
          <button className="ButtonMain"> <Link to="/login"> Dodaj campera</Link></button>
        )}


                            {/* <button> <a href="/add-camper"> Dodaj campera </a> </button> */}
                        
                        </div>
                    </div>
                </div>
            </div>
         </main>

        )
}
