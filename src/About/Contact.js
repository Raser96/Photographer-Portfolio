import React, { useState } from "react";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [copiedText, setCopiedText] = useState("");
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text) => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Update state and show toast
    setCopiedText(text);
    setShowToast(true);

    // Hide the toast after a short delay
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>Contact Photographer Portfolio</h2>
          <p>
            Have questions or want to discuss a photography project? Feel free
            to reach out to us. We'd love to hear from you!
          </p>
          <p>Contact us via the information below:</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>Contact Information</h4>
          <ul className="list-unstyled">
            <li>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => copyToClipboard("+11234567890")}
              >
                <FaPhone /> Phone: +1 (123) 456-7890
              </span>
            </li>
            <li>
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  copyToClipboard("info@photographerportfolio.com")
                }
              >
                <FaEnvelope /> Email: info@photographerportfolio.com
              </span>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>Social Media</h4>
          <ul className="list-unstyled">
            <li>
              <FaInstagram />{" "}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <FaFacebook />{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <FaTwitter />{" "}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4>Address</h4>
          <p>123 Main Street, Cityville, State, Country</p>
        </Col>
      </Row>

      <Toast
        bg="dark"
        style={{
          position: "fixed",
          top: "25px",
          left: "50%",
          transform: "translateX(-50%)", // Center the toast horizontally
        }}
        show={showToast}
        onClose={() => setShowToast(false)}
      >
        <Toast.Header>
          <strong className="me-auto">Copied to Clipboard</strong>
        </Toast.Header>
        <Toast.Body className={"Dark" && "text-white"}>
          {copiedText} has been copied!
        </Toast.Body>
      </Toast>
    </Container>
  );
};

export default Contact;
