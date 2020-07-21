import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Header } from '../components/Header';
import styled from 'styled-components';

export const Media = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const gotoPrevious = () => {
    const newCurrentImage = currentImage - 1;
    setCurrentImage(newCurrentImage);
  };

  const gotoNext = () => {
    const newCurrentImage = currentImage + 1;
    setCurrentImage(newCurrentImage);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const photos = [
    { src: '../images/pic (2).jpeg', width: 4, height: 4 },
    { src: '../images/pic (3).jpeg', width: 1, height: 1 },
    { src: '../images/pic (4).jpeg', width: 3, height: 3 },
    { src: '../images/pic (11).jpeg', width: 4, height: 4 },
    { src: '../images/pic (9).jpeg', width: 7, height: 5 },
    { src: '../images/pic (5).jpeg', width: 4, height: 4 },
    { src: '../images/pic (8).jpeg', width: 3, height: 3 },
    { src: '../images/pic (7).jpeg', width: 4, height: 3 },
    { src: '../images/pic (10).jpeg', width: 4, height: 3 }
  ];

  return (
    <>
      <Header />
      <GalleryContainer>
      <Gallery photos={photos} onClick={openLightbox} />
      </GalleryContainer>

      {/* <Lightbox
        images={photos}
        onClose={closeLightbox}
        onClickPrev={gotoPrevious}
        onClickNext={gotoNext}
        currentImage={currentImage}
        isOpen={lightboxIsOpen}
      /> */}
    </>
  );
};

const GalleryContainer = styled.div`
  width: 70%;
  display: block;
  margin: 0 auto;
`;
export default Media;
