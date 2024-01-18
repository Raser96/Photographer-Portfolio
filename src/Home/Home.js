import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import ImageCarousel from "./ImageCarousel";

const Home = () => {
  return (
    <Container>
      <Helmet>
        <title>Home | Photographer Portfolio</title>
      </Helmet>
      <Row className="justify-content-center mt-4">
        <Col md={8} className="text-center">
          <h2>Ly Nhat Thuan</h2>
          <p>
            Welcome to my portfolio! I capture moments and create memories
            through my lens.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <Image
            src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/416305196_1059583751910099_2591579150544094010_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeElyyOCVk5jKgjdO2LzG9XpnLXOKzxngUSctc4rPGeBRPWx9vMCSvUtjJd3VB74IsEhpFbc9aJzB-4pwvr74ffa&_nc_ohc=VoWMPGxJSpAAX-SThet&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBo35f8gyZHA9TDcgjUd5EjgOBGd8KOU7Bhzy_Fuw8XqA&oe=65AD9EED"
            alt="Photographer Avatar"
            fluid="true"
            className="mb-3"
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col>
          <ImageCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
