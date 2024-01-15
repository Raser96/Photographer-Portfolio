import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./index.css"; // Import the CSS file

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4" className="footer-content">
            <p>Designed and Developed by Your Name</p>
          </Col>
          <Col md="4" className="footer-content">
            <p>Copyright © {year}</p>
          </Col>
          <Col md="4" className="footer-content">
            <a href="https://www.youtube.com/" target="_github">
              <FaGithub className="github" color="black" />
            </a>

            {/* <li className="social-icons">
                <a href="https://www.instagram.com/" target="_instagram">
                  <FaInstagram className="instagram" color="#e95950" />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://in.linkedin.com/in/m" target="_linkedin">
                  <FaLinkedinIn className="linkedin" color="#2D86F7" />
                </a>
              </li> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
