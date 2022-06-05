import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.jpg";


const StyledNavigation = styled.nav`
  background-color: #373737;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;

`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin:20px;

`;

const ButtonGroup = styled.div`
display:flex;
justify-content: space-between;

`;

const Button = styled.button`
background-color:aqua;
align-items: right;
padding: 15px 15px;
background-color:rgb(93, 228, 217);
border: none;
border-radius: 20px;
margin-left:20px;

`;


const StyledImgLogo = styled.img`

align-items: left;

`;



export function NavBar() {
  return (
    <>
      <StyledNavigation>

      <StyledImgLogo src={logo} />
      
        
        <StyledLinkContainer>

          
          <NavLink
            className={({ isActive }) =>
              isActive ? "linkcolor linkformat" : "linkformat"
            }
            to="/"
          >
            O NAS
          </NavLink>
          
          <NavLink
            className={({ isActive }) =>
              isActive ? "linkcolor linkformat" : "linkformat"
            }
            to="/"
          >
            ZNAJDŹ CAMPERA
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "linkcolor linkformat" : "linkformat"
            }
            to="/"
          >
            KONTAKT
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "linkcolor linkformat" : "linkformat"
            }
            to="/"
          >
            UBEZPIECZENIA
          </NavLink>

          <ButtonGroup>
            <Button> Zaloguj się </Button>
            <Button> Dodaj campera </Button>
          </ButtonGroup>

    
        </StyledLinkContainer>
      </StyledNavigation>

      

    </>
  );
}
