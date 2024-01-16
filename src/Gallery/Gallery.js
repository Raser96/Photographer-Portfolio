import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Gallery.css";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
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
    <div>
      <Helmet>
        <title>Gallery | Portfolio</title>
      </Helmet>
      <h2 style={{ textAlign: "center" }}>Photo Styles</h2>
      <Row xs={1} md={2} lg={2} className="g-4">
        <Col>
          <Card className="gallery-container">
            <Link to="/gallery/street-style">
              <Card.Title className="style-name">Street</Card.Title>
              <LazyLoadImage
                effect="blur"
                src="https://www.elleman.vn/app/uploads/2018/03/18/phong-cach-thoi-trang-duong-pho-elle-man-feature.jpg"
                alt="Street"
                className="gallery-style-item"
              />
            </Link>
          </Card>
        </Col>

        <Col>
          <Card className="gallery-container">
            <Link to="/gallery/classic">
              <Card.Title className="style-name">Classic</Card.Title>
              <LazyLoadImage
                effect="blur"
                src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?cs=srgb&dl=pexels-neil-kelly-712618.jpg&fm=jpg"
                alt="Classic"
                className="gallery-style-item"
              />
            </Link>
          </Card>
        </Col>

        <Col>
          <Card className="gallery-container">
            <Link to="/gallery/classic">
              <Card.Title className="style-name">Classic</Card.Title>
              <LazyLoadImage
                effect="blur"
                src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?cs=srgb&dl=pexels-neil-kelly-712618.jpg&fm=jpg"
                alt="Classic"
                className="gallery-style-item"
              />
            </Link>
          </Card>
        </Col>

        <Col>
          <Card className="gallery-container">
            <Link to="/gallery/street-style">
              <Card.Title className="style-name">Street</Card.Title>
              <LazyLoadImage
                effect="blur"
                src="https://www.elleman.vn/app/uploads/2018/03/18/phong-cach-thoi-trang-duong-pho-elle-man-feature.jpg"
                alt="Street"
                className="gallery-style-item"
              />
            </Link>
          </Card>
        </Col>

        <Col>
          <Card className="gallery-container">
            <Link to="/gallery/street-style">
              <Card.Title className="style-name">Street</Card.Title>
              <LazyLoadImage
                effect="blur"
                src="https://www.elleman.vn/app/uploads/2018/03/18/phong-cach-thoi-trang-duong-pho-elle-man-feature.jpg"
                alt="Street"
                className="gallery-style-item"
              />
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
