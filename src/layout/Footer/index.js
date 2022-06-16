// React imports
import React from "react";

// Bootstrap Imports
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Footer = () => {
  return (
    <Container fluid className="fixed-bottom d-flex p-3 justify-content-center bg-dark text-white">
      <Row>
        <Col>
          <span>Chrispy ©</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
