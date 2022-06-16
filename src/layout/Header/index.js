import React from "react";
import { NavLink } from 'react-router-dom';
import Container from "react-bootstrap/Container";

// <h1>Test Header</h1>
const Header = () => {
  return (
    <>
      <Container 
        className="p-3 display-4 d-flex flex-column justify-content-center"
        >
        <h1>Music App</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About Us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </>

  );
};

export default Header;
