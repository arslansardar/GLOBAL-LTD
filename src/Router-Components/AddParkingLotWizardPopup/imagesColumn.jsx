import * as React from "react";
import styled from "styled-components";

function ImagesColumn() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d400445570f4f5afa345c324c79c78fde7cf6e3250587e39a5638509d07535a5?apiKey=232681902e8f4be7961abae526196996&",
      alt: "Image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/172d9e2b7a9c3698bbc5e51d3ec80f84b24ab67c7fdaa9d8dd613968badc18f9?apiKey=232681902e8f4be7961abae526196996&",
      alt: "Image 2",
    },
  ];

  return (
    <ImageGallery>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          loading="lazy"
        />
      ))}
    </ImageGallery>
  );
}

const ImageGallery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 500px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const GalleryImage = styled.img`
  aspect-ratio: 1.89;
  object-fit: cover;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  &:not(:first-child) {
    margin-top: 45px;
  }

  @media (max-width: 991px) {
    max-width: 100%;

    &:not(:first-child) {
      margin-top: 40px;
    }
  }
`;

export default ImagesColumn;
