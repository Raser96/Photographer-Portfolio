import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Accordion,
  Spinner,
} from "react-bootstrap";
import ProgressJob from "./Progress";
import "./About.css";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Change the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Spinner className="loading" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Helmet>
        <title>About | Portfolio</title>
      </Helmet>
      <Row>
        <Col>
          <h2>About Photographer Portfolio</h2>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Kinh Nghiem</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Bla bla</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col className="avatar-image-container">
          <Image
            src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/414970983_1059582158576925_2225873603117265568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=W6QAMx9XfuYAX-ePZoX&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBpqC7j47QsVMig10LgyJDs9eAexqmlE5rwkP93fHcc2g&oe=65A6B9CC" // Replace with the actual path to your avatar image
            alt="Photographer Avatar"
            roundedCircle
            className="avatar-image"
          />
        </Col>
      </Row>

      <ProgressJob />

      <Contact />
    </Container>
  );
};

export default About;
