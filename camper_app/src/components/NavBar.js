import { useContext } from "react";
import { NavLink ,Link} from "react-router-dom";
import { UserContext } from "../context/userContext";
import { signOut } from "@firebase/auth";
import {auth} from "../firebase";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import "../components/NavBar.css";

const StyledNavigation = styled.nav`
  background-color: #373737;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

const ButtonGroup = styled.div`
display:flex;
justify-content: space-between;
margin: 10px;
`;

const Button = styled.button`
background-color: #78cdca;
align-items: right;
margin-left:30px;
font-family: 'Play', sans-serif;
`;

const StyledImgLogo = styled.img`
align-items: left;
width:220x;
height: 50px;
justify-content:center;
margin: 30px;
`;

export function NavBar() {
 
  const context=useContext(UserContext);
  
  return (
    <>
    <StyledNavigation>
      
      <NavLink to="/">
      <StyledImgLogo src={logo} />
      </NavLink>
      {context.userData && <p style={{color:"white"}}>zalogowany: {context.userData.email}</p>}

        <div className="li">
          <NavLink
            className={({ isActive }) =>
              isActive={color: 'red'} ? "linkcolor linkformat" : "linkformat"
            }
            to="/about"
          >
            O NAS
          </NavLink>
        </div>

        <div className="li">
          <NavLink
            className={({ isActive }) =>
              isActive={color: 'red'} ? "linkcolor linkformat" : "linkformat"
            }
            to="/find-camper"
          >
            ZNAJDŹ CAMPERA
          </NavLink>
        </div>    

        <div className="li">  
          <NavLink
            className={({ isActive }) =>
              isActive={color: 'red'} ? "linkcolor linkformat" : "linkformat"
            }
            to="/contact"
          >
            KONTAKT
          </NavLink>
        </div>

        <div className="li">
          <NavLink
            className={({ isActive }) =>
              isActive={color: 'red'} ? "linkcolor linkformat" : "linkformat"
            }
            to="/insurance"
          >
            UBEZPIECZENIA
          </NavLink>
        </div>
          
       <ButtonGroup>

        {context.userData && (
          <>
          <Button> <Link to="/" onClick={()=>{
            signOut(auth); 
            context.setUserData('');
            NotificationManager.info("Zostałeś wylogowany");
          }}> Wyloguj się</Link></Button>
          <Button> <Link to="/add-camper"> Dodaj campera</Link></Button>
          </>
        )}
        {!context.userData && (
          <Button> <Link to="/login"> Zaloguj się</Link></Button>
        )}


          </ButtonGroup>
      </StyledNavigation>
    </>
  );
}
