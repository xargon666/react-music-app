import React from "react";
import { Header, Main, Footer } from "../../layout";
import "./style.css";

// Bootstrap Imports
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
