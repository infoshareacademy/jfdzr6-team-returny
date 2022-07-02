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
                            <h2>TWOJA PODRÓŻ ZACZYNA SIĘ WŁAŚNIE TUTAJ!</h2>
                            <p>Znajdź, wypożycz i podróżuj camperem z całkowitą swobodą oraz poczuj pełną wolność i niezależność!</p>
                            <p>Jeśli masz swój własny pojazd, wystaw ogłoszenie i pozwól innym zwiedzać świat!</p>
                            
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
