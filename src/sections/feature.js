import React, { useRef } from 'react';
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Swiper from 'react-id-swiper';

import FeatureCard from 'components/feature-card';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import featureImage1 from 'assets/1.webp';
import featureImage2 from 'assets/2.webp';
import featureImage3 from 'assets/3.webp';
import featureImage4 from 'assets/4.webp';
import featureImage5 from 'assets/5.webp';
const FeatureData = [
  {
    image: featureImage1,
    title: 'Login',
    comments: '22 Comments',
    path: '/',
  },
  {
    image: featureImage2,
    title: 'Dashboard',
    comments: '15 Comments',
    path: '/',
  },
  {
    image: featureImage3,
    title:'Add new dish',
    comments: '12 Comments',
    path: '/',
  },
  {
    image: featureImage4,
    title: 'Add new table ',
    comments: '15 Comments',
    path: '/',
  },
  {
    image: featureImage5,
    title:'Customers Register',
    comments: '12 Comments',
    path: '/',
  },
];

const Feature = () => {
 
  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box sx={styles.features} id="productimg">
      <Container>
        <BlockTitle
          // slogan="Quality features"
          title="Tastrix: Visual Product Showcase"
          styles={styles.blockTitle}
        />

        <Swiper {...params} ref={ref}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  blockTitle: {
    textAlign: 'center',
  },
  features: {
    pt: ['80px', null, null, null, null, null, '120px'],
    pb: ['80px', null, null, null, '170px'],
    backgroundColor: '#F8FAFC',
    '.swiper-slider': {
      overflowY: 'visible',
      overflowX: 'visible',
    },
  },
  carouselBtns: {
    display: ['flex', null, null, null, null, 'flex'],
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      fontSize: [2, null, 4, null, 5],
      color: '#BBC7D7',
      width: 'auto',
      padding: [0],
      margin: '0 5px',
      mt: '15px',
      transition: '500ms',
      '&:hover, &:active, &:focus': {
        color: 'primary',
      },
    },
  },
};
