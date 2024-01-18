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

  const galleryItems = [
    {
      id: 1,
      title: "Street",
      imageSrc:
        "https://www.elleman.vn/app/uploads/2018/03/18/phong-cach-thoi-trang-duong-pho-elle-man-feature.jpg",
    },
    {
      id: 2,
      title: "Classic",
      imageSrc:
        "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?cs=srgb&dl=pexels-neil-kelly-712618.jpg&fm=jpg",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Gallery | Portfolio</title>
      </Helmet>
      <h2 className="mb-5" style={{ textAlign: "center" }}>
        Photo Styles
      </h2>
      <Row xs={1} md={2} lg={2} className="g-4">
        {galleryItems.map((item) => (
          <Col key={item.id}>
            <Card className="gallery-container">
              <Link to={`/gallery/${item.title.toLowerCase()}`}>
                <Card.Title className="style-name">{item.title}</Card.Title>
                {isLoading ? (
                  <Container>
                    <Row
                      className="justify-content-center align-items-center"
                      style={{ minHeight: "20vh" }}
                    >
                      <Spinner
                        style={{
                          minHeight: "5em",
                          minWidth: "5em",
                          color: "black",
                        }}
                        animation="border"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </Row>
                  </Container>
                ) : (
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    src={item.imageSrc}
                    alt={item.title}
                    className="gallery-style-item"
                  />
                )}
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
