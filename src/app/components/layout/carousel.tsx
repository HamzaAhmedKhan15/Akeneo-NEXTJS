"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';


const NavbarHeight = '10%'; // Adjust this value according to your navbar height

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0;
  overflow-x: hidden;
`;

const Slide = styled.div`
  height: 90vh;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 45vh;
  background-image: url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yNTEtbWluZC0xNS5qcGc.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding: 20px;
  user-select: text;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 70vh;
    justify-content: center;
    padding-top: ${NavbarHeight}; // Add padding top to ensure it's below the navbar
  }

  @media (min-width: 770px) and (max-width: 900px) {
    background-size: cover;
    padding: 20px;
    height: 100vh;
  }
`;

const ImageContainer = styled.div`
  width: 36%;
  margin-left: 20px;
  flex-shrink: 0;
  padding-right: 16%;
  padding-top: 2%;

  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 20px;
    margin-left: 0;
    padding-right: 0;
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (min-width: 770px) and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  color: white;
  max-width: 50%;
  width: 50%;
  padding-left: 14.5%;
  padding-top: 6%;
  padding-bottom: 20px;

  @media (max-width: 768px) and (max-width: 1200px){
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-top: ${NavbarHeight}; // Ensure content is below the navbar
  }

  @media (min-width: 770px) and (max-width: 900px) {
    max-width: 50%;
    width: 50%;
    padding-left: 10%;
    padding-top: ${NavbarHeight}; // Ensure content is below the navbar
  }
`;

const Heading = styled.h1`
  margin: 0 0 10px 0;
  font-size: 38px;
  font-weight: 550;
  line-height: 1.3;
  padding-right: 10px;
  user-select: text;

  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 1.2;
    padding-right: 0;
    margin: 0;
  }
  @media (max-width: 447px) {
    font-size: 30px;
  }

  @media (min-width: 770px) and (max-width: 900px) {
    font-size: 36px;
    line-height: 1.2;
    padding-right: 0;
    margin: 0;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 20px 0;
  padding-top: 20px;
  font-size: 16px;
  padding-bottom: 15px;
  padding-right: 19px;
  user-select: text;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0;
    padding-right: 0;
  }
  @media (max-width: 447px) {
    font-size: 0.9rem;
  }

  @media (min-width: 770px) and (max-width: 900px) {
    font-size: 1rem;
    margin: 0;
    padding-right: 0;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 10px;
`;

const CarouselComponent: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 15000,
    pauseOnHover: false,
    draggable: false,  // Disable dragging
  };

  const slides = [
    {
      heading: 'The World\'s First Intelligent Product Cloud',
      paragraph: 'Let your products tell their story with Akeneo’s best-of-breed technology and extensive partner network. Akeneo Product Cloud redefines how you manage, enrich, and innovate your entire product record. Create elevated product experiences with seamless data management, efficient AI supplier onboarding, and a comprehensive app store tailored to your business and buyers’ needs.',
      buttonText: 'Learn More',
      imageUrl: '/s1.png', // Replace with actual image URL
    },
    {
      heading: 'The World\'s First Intelligent Product Cloud',
      paragraph: 'Let your products tell their story with Akeneo’s best-of-breed technology and extensive partner network. Akeneo Product Cloud redefines how you manage, enrich, and innovate your entire product record. Create elevated product experiences with seamless data management, efficient AI supplier onboarding, and a comprehensive app store tailored to your business and buyers’ needs.',
      buttonText: 'Learn More',
      imageUrl: '/s2.png', // Replace with actual image URL
    },
    {
      heading: 'The World\'s First Intelligent Product Cloud',
      paragraph: 'Let your products tell their story with Akeneo’s best-of-breed technology and extensive partner network. Akeneo Product Cloud redefines how you manage, enrich, and innovate your entire product record. Create elevated product experiences with seamless data management, efficient AI supplier onboarding, and a comprehensive app store tailored to your business and buyers’ needs.',
      buttonText: 'Learn More',
      imageUrl: '/s3.png', // Replace with actual image URL
    },
  ];

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <Content>
              <Heading>{slide.heading}</Heading>
              <Paragraph>{slide.paragraph}</Paragraph>
              <Button>{slide.buttonText}</Button>
            </Content>
            <ImageContainer>
              <StyledImage src={slide.imageUrl} alt="Slide" />
            </ImageContainer>
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CarouselComponent;
