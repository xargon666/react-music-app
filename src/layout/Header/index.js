import React from 'react'
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <>
    <Container className="p-3">
    <h1>Music App</h1>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </Container>
    </>
  )
}

export default Header
