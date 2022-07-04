// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';

function CarouselSwiper() {
  const [carousel, setCarousel] = useState([
    'https://placeimg.com/800/200/arch',
    'https://placeimg.com/700/200/arch',
    'https://placeimg.com/400/200/arch',
    'https://placeimg.com/500/200/arch',
  ]);
  const swiper = useSwiper();
  return (
    <div className=" border relative max-w-screen-lg mx-auto h-96">
      {' '}
      <Swiper
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {carousel.map((el) => {
          return (
            <div>
              <SwiperSlide>
                <img className="w-full object-cover" src={el} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>
    </div>
  );
}

export default CarouselSwiper;
