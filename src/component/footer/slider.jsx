import styles from './slider.module.css'
import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual,Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import  {Imgslides} from './slides'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
SwiperCore.use([Virtual,Autoplay, Navigation, Pagination]);

export default () => {

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 4, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <>
      <div className={`bg-white row mx-0 py-0 px-2 border-left-0 border-right-0 border justify-content-center${styles.mainDiv}`}>
        <h3 className={` w-100 text-center mb-2 ${styles.h3tag}`}>AS SEEN ON:</h3>
        <div className={`crouselslide w-100 px-1 ${styles.crouselslide}`}>
          <div className={`crousel-inner ${styles.inner}`}>
            <div className={`mx-0 mx-2 ${styles.row}`}>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={5}
              centeredSlides={true}
              spaceBetween={15}
              pagination={{
                type: 'fraction',
              }}
              autoplay={{
                delay:1000,
                disableOnInteraction:false
              }}
              navigation={true}
              className="mySwiper"
            >
        
              {Imgslides.map((slide,index) => (
                <SwiperSlide className='mySwiper' virtualIndex={index}>
                  <img src={`${slide.url}`}/>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}