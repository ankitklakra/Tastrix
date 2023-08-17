import React, { useState } from 'react';
import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Text, Heading } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import img1 from 'assets/testi-1-1.webp';
import img2 from 'assets/testi-1-2.webp';
import img3 from 'assets/testi-1-3.webp';

SwiperCore.use([Thumbs, Autoplay]);

const TESTIMONIALS_DATA = [
  {
    image: img1,
    heading: 'Narrow Gauge',
    designation: 'Owner',
    content:
    "Tastrix has been a game-changer for my restaurant! With its intuitive interface and powerful features, managing my establishment has never been smoother. From streamlined reservations to inventory control, Tastrix does it all. My staff and I are thrilled with the boost in efficiency and the improved dining experience we're able to offer. Highly recommended!",
  },
  {
    image: img2,
    heading: 'Cilantro',
    designation: 'Owner',
    content:
    "As a restaurant owner, I can't thank Tastrix enough for simplifying my operations. The software's user-friendly design makes it easy for my team to handle table assignments, order processing, and even customer feedback. The real-time insights have helped us optimize our menu offerings and manage peak hours seamlessly. Tastrix truly caters to the needs of modern restaurateurs!",
  },
  {
    image: img3,
    heading: 'Aamantran',
    designation: 'Owner',
    content:
    "Tastrix is the secret ingredient that turned my restaurant around. With its robust reporting and analytics, I now have a clear understanding of what's working and what's not. This software has helped me make data-driven decisions, leading to increased revenue and happier customers. From staff scheduling to financial tracking, Tastrix has exceeded my expectations in every way.",
  },
  // {
  //   image: img2,
  //   heading: 'Natalia Sanz',
  //   designation: 'Head of Technology',
  //   content:
  //     'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional.',
  // },
  // {
  //   image: img3,
  //   heading: 'Ece Akman',
  //   designation: 'Senior Marketer',
  //   content:
  //     'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base.',
  // },
];

const Testimonials = () => {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const infoParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  };
  const contentParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <Container>
        <BlockTitle
          slogan="Client Comments"
          title="Why clients love us"
          styles={styles.blockTitle}
        />
        <Swiper
          id="testimonialsContent"
          thumbs={{ swiper: thumbsSwiper }}
          {...contentParams}
        >
          {TESTIMONIALS_DATA.map((testimonialText, index) => (
            <SwiperSlide key={`testimonial-content-${index}`}>
              <Text sx={styles.testimonialsContent} as="p">
                {testimonialText.content}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          id="testimonialsInfo"
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          watchSlidesProgress
          {...infoParams}
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <SwiperSlide key={`testimonial-info-${index}`}>
              <Image src={testimonial.image} alt="testimonials image" />
              <Heading as="h3">{testimonial.heading}</Heading>
              <Text as="span">{testimonial.designation}</Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    pt: ['65px', null, null, null, null, '80px', '170px'],
    '.blockTitle': {
      textAlign: 'center',
      marginBottom: ['25px', null, null, null, null, '50px'],
    },
    '#testimonialsInfo': {
      textAlign: ['center', null, null, null, null, 'left'],
      marginTop: ['30px', null, null, null, '40px', '50px'],
      width: '100%',
      maxWidth: '820px',
      '.swiper-slide': {
        cursor: 'pointer',
        borderTop: [
          '5px solid transparent',
          null,
          null,
          null,
          null,
          '5px solid transparent',
        ],
        position: 'relative',
        paddingLeft: ['0', null, null, null, null, '75px'],
        paddingTop: ['0', null, null, null, null, '25px'],
        paddingBottom: ['0', null, null, null, null, '15px'],
        minHeight: ['auto', null, null, null, null, '50px'],
        '&.swiper-slide-thumb-active': {
          borderColor: '#8D448B',
        },
      },
      img: {
        borderRadius: '50%',
        display: 'block',
        marginLeft: ['auto', null, null, null, null, '0'],
        marginRight: ['auto', null, null, null, null, '0'],
        marginBottom: ['15px', null, null, null, null, '0'],
        position: ['relative', null, null, null, null, 'absolute'],
        top: ['auto', null, null, null, null, '50%'],
        left: ['auto', null, null, null, null, '10px'],
        mt: ['10px', null, null, null, null, 0],
        transform: [
          'translateY(0)',
          null,
          null,
          null,
          null,
          'translateY(calc(-50% + 8px))',
        ],
      },
      h3: {
        fontSize: ['18px', null, 2, null, 3],
        lineHeight: 1,
        color: 'black',
        display: ['none', null, 'block'],
      },
      span: {
        color: 'text',
        opacity: '0.8',
        fontSize: [15, null, '15px'],
        lineHeight: 1,
        display: 'block',
        display: ['none', null, 'block'],
        marginTop: '10px',
      },
    },
  },
  testimonialsContent: {
    margin: 0,
    fontSize: [2, null, 3, null, 4, '32px', 7],
    color: 'black',
    lineHeight: [2.3, null, 1.8],
    textAlign: 'center',
    fontFamily: 'special',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '820px',
    marginTop: ['0', null, null, null, null, '-15px'],
  },
};
