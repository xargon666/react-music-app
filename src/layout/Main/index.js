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
      <Container>
        <Row>
          <Col lg={9}>
            <Artist />
          </Col>
          <Col lg={3}>
            <Form />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
