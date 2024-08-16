import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define styled components
const FooterContainer = styled.footer`
  background-color: #4b1968;
  color: white;
  padding: 40px 20px;
  text-align: left;
  width: 100%;
  padding-left:12%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SectionHeaderBold = styled.h4`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const SectionHeaderBold2 = styled.h1`
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: 350;
  white-space: nowrap;
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`;

const SocialIcon = styled.a`
  margin-right: 10px;
  color: purple;
  font-size: 20px;
`;

const NewsletterSection = styled.div`
  margin: 30px 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding-right: 50px; /* Adjusted padding */
  }
`;

const DescriptionParagraph = styled.p`
  margin: 0;
  line-height: 1.6;
  max-width: 370px;
  font-size: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid white;
  border-radius: 4px;
  width: 230px;
  max-width: 900px;  // Doubled the original max-width value
  background-color: purple;
  color: white;

  @media (max-width: 767px) {
    margin-bottom: 35px;
  }
`;

const BottomFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 13px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 200px;
  }
`;

const BottomFooterUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin: 0;
  margin-right: 22px;

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding-left: 5px;
  }
`;

const BottomFooterLi = styled.li`
  padding: 0 -5px;

  @media (max-width: 767px) {
    flex: 1 1 45%;
    text-align: center;
  }
`;

const ColumnContainer1 = styled.div`
  flex: 1;
  padding: 10px 30px;
  padding-left: 180px;
  margin-bottom: 20px;

  @media (max-width: 1165px) and (min-width: 768px) {
    padding-left: 0;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    padding-left: 10px;
    margin-bottom: 0;
    flex-basis: 100%;
  }

  @media (min-width: 768px) {
    padding: 10px 30px;
    padding-left: 1px;
  }
`;


const ColumnContainer = styled.div`
  flex: 1;
  padding: 10px 5px; /* Original padding */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 15px; /* Adjusted padding for smaller screens */
    margin-bottom: 20px; /* Increased bottom margin for more spacing */
    flex-basis: 50%; /* Set to 50% width on smaller screens */
  }

  @media (min-width: 768px) {
    padding: 0 10px; /* Original padding */
    margin-bottom: 0;
  }
`;

const ColumnContainerWithRightPadding = styled(ColumnContainer)`

padding-right:5%;

  @media (max-width: 768px) {
    padding-right: 37%;
  }
`;

const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HorizontalLine = styled.hr`
  width: 90%;
  margin: 20px 0; /* Adjust margin as needed */

  /* Style the line */
  border: none;
  border-top: 1px solid #ddd;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  font-size: 13px;
   text-overflow: ellipsis;
  overflow: hidden;
  display: block; /* Ensure it applies to block-level elements */
  padding-bottom:8px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0; /* Reduced gap between ul and li */
`;

const P = styled.p`
  margin-left: -10%;
  
`;

const Li = styled.li`
  margin-bottom: 5px; /* Reduced margin between li elements */
  font-size: 12px;
`;

const HiringSpan = styled.span`
  background-color: purple;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
`;

// Define the Footer component
const Footer = () => {
  const isMobile = useMediaQuery('only screen and (max-width: 767px)');

  return (
    <FooterContainer>
      <Container>
        <ColumnContainer1>
          <SectionHeaderBold>LOGO</SectionHeaderBold>
          <DescriptionParagraph>
            The suite of products that helps you and your supply chain to create and share engaging omnichannel product experiences.
          </DescriptionParagraph>
          <SocialMedia>
            <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-youtube"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-github"></i></SocialIcon>
          </SocialMedia>
          <NewsletterSection>
            <SectionHeaderBold2>Receive the Akeneo newsletter</SectionHeaderBold2>
            <Input type="email" placeholder="Your Email" />
          </NewsletterSection>
        </ColumnContainer1>

        <ColumnContainer>
          <SectionHeaderBold2><b>Company</b></SectionHeaderBold2>
          <Ul>
            <Li><A href="#">About Akeneo</A></Li>
            <Li><A href="#">Akeneo Leadership</A></Li>
            <Li><A href="#">Careers <HiringSpan>Hiring</HiringSpan></A></Li>
            <Li><A href="#">Contact Us</A></Li>
            <Li><A href="#">Press</A></Li>
            <Li><A href="#">FAQ</A></Li>
          </Ul>
        </ColumnContainer>

        <ColumnContainer>
          <SectionHeaderBold2><b>Products</b></SectionHeaderBold2>
          <Ul>
            <Li><A href="#">Akeneo Product Cloud</A></Li>
            <Li><A href="#">Akeneo PIM</A></Li>
            <Li><A href="#">Compare Editions</A></Li>
            <Li><A href="#">Shared Catalogs</A></Li>
            <Li><A href="#">Product Activation</A></Li>
            <Li><A href="#">PIM Integrations</A></Li>
            <Li><A href="#">Akeneo App Store</A></Li>
          </Ul>
        </ColumnContainer>

        <ColumnContainer>
          <SectionHeaderBold2><b>Your Success</b></SectionHeaderBold2>
          <Ul>
            <Li><A href="#">PIM Services</A></Li>
            <Li><A href="#">PIM Training & Certification</A></Li>
            <Li><A href="#">Customers</A></Li>
            <Li><A href="#">PX Strategy Self Assessment</A></Li>
            <Li><A href="#">Try it Now</A></Li>
          </Ul>
        </ColumnContainer>

        <ColumnContainer>
          <SectionHeaderBold2><b>Community</b></SectionHeaderBold2>
          <Ul>
            <Li><A href="#">Solution Partners</A></Li>
            <Li><A href="#">Technology Partners</A></Li>
            <Li><A href="#">Customer Community</A></Li>
            <Li><A href="#">Find a Partner</A></Li>
          </Ul>
        </ColumnContainer>

        <ColumnContainerWithRightPadding>
          <SectionHeaderBold2><b>Resources</b></SectionHeaderBold2>
          <Ul>
            <Li><A href="#">Blog</A></Li>
            <Li><A href="#">Help Center</A></Li>
            <Li><A href="#">Resource Library</A></Li>
            <Li><A href="#">Customer Stories</A></Li>
            <Li><A href="#">Get Support</A></Li>
            <Li><A href="#">How to Contribute</A></Li>
          </Ul>
        </ColumnContainerWithRightPadding>
      </Container>

      {/* Horizontal line */}
      <HorizontalLine />

      {/* Bottom Footer */}
      <BottomFooter>
        <P>&copy; 2024 Akeneo. All rights reserved.</P><br />
        <BottomFooterUl>
          <BottomFooterLi><A href="#">Terms of Use</A></BottomFooterLi>
          <BottomFooterLi><A href="#">Privacy Policy</A></BottomFooterLi>
          <BottomFooterLi><A href="#">Cookies Settings</A></BottomFooterLi>
          <BottomFooterLi><A href="#">Subscriptions</A></BottomFooterLi>
          <BottomFooterLi><A href="#">Sitemap</A></BottomFooterLi>
        </BottomFooterUl>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
