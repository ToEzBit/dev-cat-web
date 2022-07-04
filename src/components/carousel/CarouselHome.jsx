import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();

function CarouselHome() {
  const [carousel, setCarousel] = useState([
    'https://placeimg.com/800/200/arch',
    'https://placeimg.com/700/200/arch',
    'https://placeimg.com/400/200/arch',
    'https://placeimg.com/500/200/arch',
  ]);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [animation, setAnimation] = useState('card-left');
  const [animationToggle, setAnimationToggle] = useState(false);

  const [disable, setDisable] = useState(false);

  console.log(carouselIndex);

  return (
    <div className="  relative max-w-screen-lg mx-auto h-96 ">
      <img
        src={carousel[carouselIndex]}
        className={`w-full opacity-100 h-full object-cover ${animation}-${animationToggle}   object-center rounded-2xl `}
      ></img>
      <div className="top-0 bottom-0 px-8 items-center   absolute flex justify-between w-full">
        <button
          onClick={(e) => {
            if (carouselIndex <= 0) {
              setCarouselIndex(carousel.length - 1);
              setAnimation('card-left');
              setAnimationToggle(!animationToggle);
            } else {
              setCarouselIndex(carouselIndex - 1);
              setAnimation('card-left');
              setAnimationToggle(!animationToggle);
            }
          }}
          className="btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={(e) => {
            if (carouselIndex >= carousel.length - 1) {
              setCarouselIndex(0);
              setAnimation('card-right');
              setAnimationToggle(!animationToggle);
            } else {
              setCarouselIndex(carouselIndex + 1);
              setAnimation('card-right');
              setAnimationToggle(!animationToggle);
            }
          }}
          className=" btn btn-circle"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default CarouselHome;
