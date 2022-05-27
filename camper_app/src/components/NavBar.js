import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: yellowgreen;
  height: 100px;
  width: 100%;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export function NavBar() {
  return (
    <>
      <StyledNavigation>
        <StyledLinkContainer>
          <NavLink
            className={({ isActive }) =>
              isActive ? "linkcolor linkformat" : "linkformat"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "linkcolor linkformat" : "linkformat"
            }
            to="/about"
          >
            About
          </NavLink>
        </StyledLinkContainer>
      </StyledNavigation>
    </>
  );
}
