import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Photo Styles</h2>
      <Row className="gallery-container">
        <Col>
          {" "}
          <Link to="/gallery/street-style">
            <h4 className="style-name">Street</h4>
            <Image
              src="https://www.elleman.vn/app/uploads/2018/03/18/phong-cach-thoi-trang-duong-pho-elle-man-feature.jpg"
              alt="Street"
              className="gallery-style-item"
              thumbnail
            />
          </Link>
        </Col>

        <Col>
          <Link to="/gallery/classic">
            <h4 className="style-name">Classic</h4>
            <Image
              src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?cs=srgb&dl=pexels-neil-kelly-712618.jpg&fm=jpg"
              alt="Classic"
              className="gallery-style-item"
              thumbnail
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
