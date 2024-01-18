import React from "react";
import { Carousel, Image } from "react-bootstrap";

const galleryItems = [
  {
    id: 1,
    imageSrc:
      "https://www.elleman.vn/app/uploads/2018/03/18/phong-cach-thoi-trang-duong-pho-elle-man-feature.jpg",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?cs=srgb&dl=pexels-neil-kelly-712618.jpg&fm=jpg",
  },
];

function ImageCarousel() {
  return (
    <div>
      <h2
        className="mt-5 mb-3"
        style={{
          textAlign: "center",
          fontFamily: "Melody Jazzy",
          fontSize: "10vh",
        }}
      >
        Best Performance
      </h2>
      <Carousel>
        {galleryItems.map((item) => (
          <Carousel.Item key={item.id} interval={1000}>
            <Image
              thumbnail
              className="d-block w-100"
              style={{ maxHeight: "100vh" }}
              src={item.imageSrc}
              alt={""}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
