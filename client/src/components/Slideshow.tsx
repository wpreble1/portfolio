import React, { FC, ReactElement, useState, useEffect } from 'react';

interface SlideshowProps {
  images: string[];
  alt: string;
}

const Slideshow: FC<SlideshowProps> = ({ images, alt }): ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 1500);
    return () => clearInterval(loop);
  }, [images, currentSlide]);

  return (
    <img className="border-purple border-dotted shadow-lg" src={images[currentSlide]} alt={alt} />
  );
};

export default Slideshow;
