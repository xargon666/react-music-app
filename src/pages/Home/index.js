import React from "react";
import { Header, Main, Footer } from "../../layout";
import "./style.css";

// Bootstrap Imports
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <Container fluid className="d-flex flex-column justify-content-between">
      <Col>
        <Row>
          <Header />
        </Row>
        <Row>
          <Main />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Col>
    </Container>
  );
};

export default Home;
