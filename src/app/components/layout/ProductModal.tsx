"use client";

import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import Image from 'next/image';

interface ModalProps {
  arrowPosition: number | null;
  isOpen: boolean;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  modalTop: string; // Add modalTop prop for dynamic top position
}

interface StyledModalProps {
  arrowPosition: number | null;
  isOpen: boolean;
  modalTop: string; // Add modalTop prop for dynamic top position
}

const ModalContainer = styled.div<StyledModalProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: row; /* Horizontal layout */
  flex-wrap: nowrap; /* Prevent wrapping items */
  background: white;
  // padding: 2px;
  // max-width: 70vw; /* Maximum width relative to viewport */
  width: 600px;
  position: fixed; /* Change to fixed positioning */
  top: ${({ modalTop }) => modalTop}; /* Dynamic top position */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2000;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow-x: hidden; /* Ensure content doesn't overflow horizontally */

  &:before {
    content: '';
    position: absolute;
    top: -10px; /* Adjust as needed to position the arrows */
    left: ${({ arrowPosition }) => (arrowPosition ? `${arrowPosition}px` : '50%')};
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid red;
  }

  @media (max-width: 900px) {
    max-width: 100vw; /* Make full width for smaller screens */
    width: 90%;
    flex-direction: column; /* Stack columns vertically */
    top: auto;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 2469px) {
    max-width: 40vw; /* Adjust maximum width for larger screens */
    width: 70%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Prevent columns from wrapping */
  gap: -10px;
  overflow-x: hidden; /* Ensure content doesn't overflow horizontally */
  font-size: 14px;

  @media (max-width: 900px) {
    flex-direction: column; /* Stack columns vertically */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto; /* Flexible width for each column */
  min-width: 200px; /* Minimum width for each column */
  padding: 27px;

  @media (max-width: 900px) {
    min-width: 100%; /* Full width for smaller screens */
    padding: 10px;
  }
`;

const FourthColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px; /* Minimum width for each column */
  flex: 1 1 auto; /* Flexible width for the wrapper */
  background-color: #e6e6fa; /* Light purple background */
  padding: 0px; /* Match padding with ModalContainer */
  box-sizing: border-box; /* Ensure padding is included in the width/height */

  @media (max-width: 900px) {
    min-width: 100%; /* Full width for smaller screens */
    padding: 10px;
  }
`;

const ModalHeader = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 18px;
  color: black;
  font-size: 16px;

  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start */
  padding: 10px 0;
  color: black;
  &:hover {
    text-decoration: underline;
  }
  p {
    margin-top: 5px;
    font-size: 13px;
    color: gray;
  }
`;

const ModalItemContent = styled.div`
  display: flex;
  align-items: center; /* Align icon and text in the center vertically */
  font-size: 14px;
`;

const ModalImage = styled(Image)`
  width: 70%; /* Set to 100% to make responsive */
  height: auto; /* Maintain the aspect ratio */
  max-width: 200px; /* Set a smaller max-width for the image */
  border-radius: 20px; /* Rounded corners */
  // margin: 20px; /* Add margin instead of padding */
  align-items:center;
  margin:0 auto;
  margin-top:20%;

  @media (max-width: 900px) {
    width: 100%;
    // margin: 10px 0; /* Adjust margins for smaller screens */
  }

  @media (min-width: 2469px) {
    max-width: 70%; /* Smaller image size for larger screens */
    // margin:20%;
    // margin-top:20%;/
  }
`;

const ModalImageHeading = styled.h3`
  margin: 0 auto;
  padding-top:20px;
  font-size: 14px;
  font-weight: bold;
  color: #1f1f1f;
  width:140px;
  text-align: center; /* Center align the heading */
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Icon = styled(Image)`
  margin-right: 10px; /* Space between the icon and the text */
`;

const ProductModal = forwardRef<HTMLDivElement, ModalProps>(
  ({ arrowPosition, isOpen, onMouseEnter, onMouseLeave, modalTop }, ref) => {
    const [topPosition, setTopPosition] = useState<string>("calc(100vh - 100vh)"); // Initial position below navbar
    const [navbarScrolled, setNavbarScrolled] = useState<boolean>(false);

    useEffect(() => {
      const calculateInitialTopPosition = () => {
        const navbarHeight = 80; // Replace with your actual navbar height
        const scrollY = window.scrollY || window.pageYOffset;
        return `calc(${scrollY + navbarHeight}px)`;
      };

      const handleScroll = () => {
        const navbarHeight = 80; // Replace with your actual navbar height
        const scrollY = window.scrollY || window.pageYOffset;
        const newTopPosition = `calc(${scrollY + navbarHeight}px)`;
        setTopPosition(newTopPosition);
        setNavbarScrolled(scrollY > 0); // Set navbarScrolled to true if scrollY is greater than 0
      };

      // Set initial position when component mounts
      setTopPosition(calculateInitialTopPosition());

      // Add scroll listener
      window.addEventListener("scroll", handleScroll);

      // Clean up listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const modalMarginTop = navbarScrolled ? "calc(80px - 53px)" : "calc(100vh - 94vh + 50px)"; // Adjusted margin top based on navbar scroll

    return (
      <ModalContainer
        arrowPosition={arrowPosition}
        isOpen={isOpen}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        modalTop={modalTop || topPosition} // Use modalTop prop or dynamic position
        style={{ marginTop: modalMarginTop }}
      >
        <ModalContent>
          <Column>
            <ModalHeader>Akeneo Studios</ModalHeader>
            <ModalItem>
              <ModalItemContent>
                <Icon src="/user.png" alt="icon" width={20} height={20} />
                PIM Enterprise Edition
              </ModalItemContent>
              <p>Additional information about PIM Enterprise Edition.</p>
            </ModalItem>
            <ModalItem>
              <ModalItemContent>
                <Icon src="/user.png" alt="icon" width={20} height={20} />
                PIM Growth Edition
              </ModalItemContent>
              <p>Additional information about PIM Growth Edition.</p>
            </ModalItem>

          </Column>
          <Column>
            <ModalHeader>Akeneo App Store</ModalHeader>
            <ModalItem>
              <ModalItemContent>
                <Icon src="/user.png" alt="icon" width={20} height={20} />
                Supplier Data Manager
              </ModalItemContent>
              <p>Additional information about PIM Enterprise Edition.</p>
            </ModalItem>

            <ModalItem>
              <ModalItemContent>
                <Icon src="/user.png" alt="icon" width={20} height={20} />
                Integrations
              </ModalItemContent>
              <p>Additional information about Comparing Editions.</p>
            </ModalItem>
          </Column>
        </ModalContent>
      </ModalContainer>
    );
  }
);

// Set the display name for the component
ProductModal.displayName = "ProductModal";

export default ProductModal;
