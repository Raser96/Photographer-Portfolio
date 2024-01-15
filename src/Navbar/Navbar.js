import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="main-nav">
      <Container>
        <BootstrapNavbar.Brand href="/">
          <img className="logo-nav" alt="" src="/images/logo.jpg" />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbar" />
        <BootstrapNavbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link className="me-auto nav-port-item" href="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link className="me-auto nav-port-item" href="/about">
              About
            </Nav.Link>
          </Nav>
          <div className="social-media-links">
            <ul className="social-media">
              <li className="social-icon">
                <a href="https://www.youtube.com/" target="_youtube">
                  <FaYoutube className="youtube" color="#ff0000" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://www.instagram.com/" target="_instagram">
                  <FaInstagram className="instagram" color="#e95950" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://www.tiktok.com" target="_linkedin">
                  <FaTiktok className="tiktok" color="black" />
                </a>
              </li>
            </ul>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
