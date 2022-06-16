import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// <h1>Test Header</h1>
const Header = () => {
  return (
<>
   <Navbar bg="dark" variant="dark" className="mb-3">
    <Container>
      <Navbar.Brand href="#home" className="fs-2 align-middle">
        <img
          alt=""
          src="https://twemoji.maxcdn.com/2/svg/1f954.svg"
          width="40"
          height="40"
          className="d-inline-block align-middle"
        />{'  '}
      Chrispy Music App
      </Navbar.Brand>
      <Nav className="nav nav-pills">
              <Nav.Item >
                <Nav.Link to="/" className=" active">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link to="/About Us">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link to="/Contact" >
                  Contact
                </Nav.Link>
              </Nav.Item>
          </Nav>
    </Container>
  </Navbar>
</>

   
  );
};

export default Header;

/* Dodgy Bootstrap React Navbar
 <>
      <Container>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
          >
            <img
              className="bi me-2"
              width="40"
              height="32"
              src="https://twemoji.maxcdn.com/2/svg/1f954.svg"
            />
            <span className="fs-4">Music App</span>
          </a>

          <Nav className="nav nav-pills">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About Us" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </Nav>
        </header>
      </Container>
    </>

/* Bootstrap Navbar

<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> x
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"> x
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> x
        <span class="fs-4">Simple header</span> x
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>

*/
