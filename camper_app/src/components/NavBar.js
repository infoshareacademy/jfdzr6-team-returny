import { NavLink } from "react-router-dom";
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
background-color:aqua;
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
  return (
    <>
    <StyledNavigation>
      <StyledImgLogo src={logo} />

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
            <Button> <a href="/login"> Zaloguj się</a></Button>
            <Button> <a href="/add-camper"> Dodaj campera</a> </Button>
          </ButtonGroup>
      </StyledNavigation>
    </>
  );
}
