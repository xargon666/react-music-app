import React from "react";
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <>
      <Container className="p-3 display-4">
        <h1>Music App</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About Us"></NavLink>
            </li>
            <li>
              <NavLink to="/Contact"></NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Header;
