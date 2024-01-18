import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { Gallery } from "react-grid-gallery";
import { Helmet } from "react-helmet-async";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ClassicStyle = () => {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 1024,
      height: 683,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 1024,
      height: 683,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 1024,
      height: 683,
    },
  ];

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

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
        <title>Classic | Portfolio</title>
      </Helmet>
      <h2 style={{ textAlign: "center" }}>Classic</h2>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <div>
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </div>
    </div>
  );
};

export default ClassicStyle;
