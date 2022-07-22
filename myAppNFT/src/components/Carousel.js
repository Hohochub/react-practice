import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../Assets/Nfts/bighead.png';
import img2 from '../Assets/Nfts/bighead-1.png';
import img3 from '../Assets/Nfts/bighead-2.png';
import img4 from '../Assets/Nfts/bighead-3.png';
import img5 from '../Assets/Nfts/bighead-4.png';
import img6 from '../Assets/Nfts/bighead-5.png';
import img7 from '../Assets/Nfts/bighead-6.png';
import img8 from '../Assets/Nfts/bighead-7.png';
import img9 from '../Assets/Nfts/bighead-8.png';
import img10 from '../Assets/Nfts/bighead-9.png';

import Arrow from '../Assets/Arrow.png';


const Container = styled.div`
  width: 22vw;
  height: 58vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
  .swiper {
      width: 100% ;
      height: 100% ;

  .swiper-slide {
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next {
    color: ${props => props.theme.text};

    right: 0;
    width: 4rem;
    top: 60%;
    
    background-image: url(${Arrow});
    backdround-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${props => props.theme.text};

    left: 0;
    width: 4rem;
    top: 65%;

    transform: rotate(180deg);
    background-image: url(${Arrow});
    backdround-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  

  img {
    width: 80%;
    height: 80%;
  }
}
`


const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
          deplay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide><img src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img2} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img3} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img4} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img5} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img6} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img7} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img8} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img9} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img10} alt="The Weirdos" /> </SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Carousel