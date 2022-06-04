import { NavLink } from "react-router-dom";
import { StyledNavigation , StyledLinkContainer } from "./NavBar.styles"

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
