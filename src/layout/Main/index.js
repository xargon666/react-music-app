// React Imports
import React from "react";
import { Artist, Form } from "../../components";

// Bootstrap Imports
import { default as Container } from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Main = () => {
  return (
    <>
      <Container fluid className="bg-dark text-white p-4">
        <Row className="justify-content-md-center">
          <Col lg={3}>
            <Form />
          </Col>
          <Col lg={7}>
            <Artist />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
