import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Import Image component from next/image
import UpArrow from '../../../../public/up-arrows.png';
import DownArrow from '../../../../public/down.png';
// import ModalComponent from './navModal'; // Adjust import based on your modal component
import ProductModal from './ProductModal';
import SolutionModal from './SolutionModal';
import ModalComponent from './navModal';

interface NavbarProps {
  scrolled: boolean;
  navLinkColor?: string; // Optional prop for dynamic nav link color
  logoColor?: string; // Optional prop for logo color
  menuBarIconColor?: string; // Optional prop for menu bar icon color
}

const NavbarContainer = styled.nav<NavbarProps>`
  background-color: ${(props) => (props.scrolled ? 'white' : 'transparent')};
  color: ${(props) => (props.scrolled ? 'black' : 'white')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  position: ${(props) => (props.scrolled ? 'fixed' : 'absolute')};
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure navbar has a standard high z-index */
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${(props) => (props.scrolled ? 'none' : '0 0px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.08)')}; /* Add shadow when scrolled */
  height: 80px;

  @media (max-width: 768px) {
    padding: 15px 20px; /* Adjusted padding for mobile screens */
    padding-top: 30px;
  }

  @media (max-width: 1200px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 992px) {
    padding-left: 2%;
    padding-right: 2%;
  }

  @media (max-width: 576px) {
    padding-left: 1%;
    padding-right: 1%;
  }
`;

const Logo = styled.div<{ logoColor?: string }>`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: ${(props) => (props.logoColor ? props.logoColor : 'inherit')}; /* Apply logo color */
  padding-left: 7%;
  padding-right: 2%;

  @media (max-width: 768px) {
    font-size: 25px;
    padding-bottom: 0;
    margin-top: -22px;
    margin-left: 0.1%; !important /* Adjusted margin for the logo */
    margin-right: auto; /* Center the logo */
  }

  @media (max-width: 576px) {
    font-size: 25px;
    padding-left: 8%;
    margin-left: 5px; /* Further adjusted margin for very small screens */
  }
    @media (max-width: 375px) {
    font-size: 25px;
    padding-left: 10%;
    margin-left: 5px; /* Further adjusted margin for very small screens */
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 20px; /* Initial gap between menu items */
  flex-wrap:wrap;

  @media (max-width: 992px) {
    gap: 15px; /* Adjusted gap for medium screens */
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide menu for small screens */
  }
`;

const MenuItem = styled.a<{ isHovered: boolean; color?: string }>`
  color: ${(props) => (props.color ? props.color : 'inherit')};
    text-decoration: none;
  font-size: 15px;
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white; /* Arrow pointing upwards */
    top: 50px; /* Adjusted position to move the arrow downward */
    left: 50%;
    transform: translateX(-50%);
    opacity: ${(props) => (props.isHovered ? 1 : 0)};
    transition: opacity 0.3s ease;
  }

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 9%;

  @media (max-width: 992px) {
    gap: 8px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 9px 15px 10px;
  font-size: 13px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 5px;

  @media (max-width: 992px) {
    padding: 7px 12px;
    font-size: 11px;
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 9px;
  }
`;

const TrialButton = styled(Button) <NavbarProps>`
  height: 50px;
  width: auto; /* Allow width to adjust based on content */
  min-width: 150px; /* Minimum width to maintain consistency */
  font-size: 16px;
  background-color: transparent;
  color: #c04ee7; /* Default color is purple */
  border: 3px solid #c04ee7;
  font-weight: 500;
  transition: color 0.3s ease, border-color 0.3s ease;
  margin-left: 2.5%;
  white-space: nowrap; /* Prevent text wrapping */
  padding: 9px 15px 10px; /* Adjust padding for better spacing */

  &:hover {
    color: ${(props) => (props.scrolled ? 'black' : 'white')}; /* Adjust hover color */
    border-color: ${(props) => (props.scrolled ? 'black' : 'white')}; /* Adjust hover border color */
  }

  @media (max-width: 992px) {
    font-size: 14px;
    padding: 7px 12px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px; /* Further adjust padding for very small screens */
  }
`;

const DemoButton = styled(Button)`
  height: 50px;
  width: auto; /* Allow width to adjust based on content */
  min-width: 153px; /* Minimum width to maintain consistency */
  font-size: 15px;
  background-color: #c04ee7;
  color: white;
  white-space: nowrap; /* Prevent text wrapping */
  padding: 9px 15px 10px; /* Adjust padding for better spacing */

  &:hover {
    background-color: #9c32b6;
  }

  @media (max-width: 992px) {
    font-size: 13px;
    padding: 7px 12px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 5px 10px; /* Further adjust padding for very small screens */
  }
`;

const MobileMenuIcon = styled.div<{ scrolled: boolean; menuBarIconColor?: string }>`
  display: none; /* Hidden by default for larger screens */
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Displayed on mobile screens */
    font-size: 24px;
    position: absolute;
    left: 15px; /* Position on the left side */
    top: 18px;
    color: ${(props) => (props.menuBarIconColor ? props.menuBarIconColor : props.scrolled ? 'black' : 'white')};
    transition: color 0.3s ease; /* Add transition for color change */
    margin-right: 60%; /* Adjusted margin to separate from logo */
  }
`;


const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 1%;
  margin-bottom: 20px;
  margin-right: -4px;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 10px 0;
  color: #4b1d6d; /* Purple color for the dropdown button */
`;

const DropdownContent = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const DropdownContainer = styled.div<{ isOpen: boolean }>`
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0; /* Grey horizontal line */
  padding-bottom: 10px;

  ${DropdownButton} {
    color: ${(props) => (props.isOpen ? '#4b1d6d' : '#4b1d6d')};
  }
`;

const SmallButton1 = styled(Button)`
  padding: 10px 15px;
  font-size: 18px; /* Smaller font size */
  align-self: flex-start;
  margin-bottom: 10px;
  width: 60%; /* Smaller width */
  background-color: transparent;
  color: #c04ee7;
  border: 3px solid #c04ee7;
`;

const SmallButton2 = styled(Button)`
  padding: 10px 15px;
  font-size: 18px; /* Smaller font size */
  align-self: flex-start;
  margin-bottom: 10px;
  width: 60%; /* Smaller width */
  background-color: #c04ee7;
  color: white;

  &:hover {
    background-color: #9c32b6;
  }
`;

const MobileMenuModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 5%;
  right: 5%;
  bottom: 5%;
  left: 5%;
  z-index: 1001; /* Ensure the modal is above the navbar */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const NestedDropdownButton = styled(DropdownButton)`
  font-size: 16px;
  padding-left: 20px; /* Indent nested dropdown button */
`;

const NestedDropdownContent = styled(DropdownContent)`
  padding-left: 20px; /* Indent nested dropdown content */
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e0e0e0; /* Grey horizontal line */
  margin: 10px 0;
`;

const ArrowIcon = styled(Image) <{ isUp?: boolean }>`
  width: 12px;
  height: ${(props) => (props.isUp ? '12px' : '12px')};
  transition: height 0.3s ease;
`;

const Navbar: React.FC<NavbarProps> = ({ scrolled, navLinkColor = 'inherit', logoColor, menuBarIconColor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [modalTop, setModalTop] = useState<string>("0");
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState<number | null>(null); // New state for selected dropdown
  const [nestedDropdownIndexes, setNestedDropdownIndexes] = useState<{ [key: number]: number | null }>({});

  const modalRef = useRef<HTMLDivElement>(null);


  // extra
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  // const handleDropdownToggle = (index: number) => {
  //   const item = ['Product', 'Solutions', 'Your Success', 'Partners', 'Resources'][index];
  //   if (item === 'Solutions' || item === 'Partners') {
  //     setActiveModal('product');
  //   } else if (item === 'Your Success' || item === 'Resources') {
  //     setActiveModal('solution');
  //   } else {
  //     setActiveModal(null);
  //   }

  //   setSelectedDropdownIndex(selectedDropdownIndex === index ? null : index);
  //   setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  // };

  // stopped

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setModalTop(isScrolled ? '60px' : '0');
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (isScrolled) {
          navbar.style.backgroundColor = 'white';
          navbar.style.color = 'black';
          navbar.style.position = 'fixed';
        } else {
          navbar.style.backgroundColor = 'transparent';
          navbar.style.color = 'white';
          navbar.style.position = 'absolute';
        }
      }

      const menuIcon = document.getElementById('menuIcon');
      if (menuIcon) {
        menuIcon.style.color = isScrolled ? 'black' : (menuBarIconColor ? menuBarIconColor : 'white');
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen, menuBarIconColor]);


  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setIsModalOpen(true);

    const item = ['Product', 'Solutions', 'Your Success', 'Partners', 'Resources'][index];
    if (item === 'Product') {
      setActiveComponent('Product');
    } else if (item === 'Solutions' || (item === 'Partners')) {
      setActiveComponent('Solution');
    } else if (item === 'Resources' || item === 'Your Success') {
      setActiveComponent('Resources');
    } else {
      setActiveComponent(null);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (modalRef.current) {
      const modalRect = modalRef.current.getBoundingClientRect();
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const isOutsideModalHorizontally = mouseX < modalRect.left || mouseX > modalRect.right;
      const isOutsideModalVertically = mouseY > modalRect.bottom;

      if (isOutsideModalHorizontally || isOutsideModalVertically) {
        setHoveredIndex(null);
        setIsModalOpen(false);
        setActiveComponent(null); // Reset the active component

      }
    }
  };

  const handleModalClose = () => {
    setHoveredIndex(null); // Ensure arrow is hidden
    setIsModalOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };



  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDropdownToggle = (index: number) => {
    // extra
    // const item = ['Product', 'Solutions', 'Your Success', 'Partners', 'Resources'][index];
    // if (item === 'Solutions' || item === 'Partners') {
    //   setActiveModal('product');
    // } else if (item === 'Your Success' || item === 'Resources') {
    //   setActiveModal('solution');
    // } else {
    //   setActiveModal(null);
    // }
    // extra end
    setSelectedDropdownIndex(selectedDropdownIndex === index ? null : index);
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleNestedDropdownToggle = (index: number, nestedIndex: number) => {
    const updatedNestedIndexes = { ...nestedDropdownIndexes };
    updatedNestedIndexes[index] = updatedNestedIndexes[index] === nestedIndex ? null : nestedIndex;
    setNestedDropdownIndexes(updatedNestedIndexes);
  };




  return (
    <>
      <NavbarContainer id="navbar" scrolled={scrolled}>
        <MobileMenuIcon id="menuIcon" scrolled={scrolled} menuBarIconColor={menuBarIconColor} onClick={handleMobileMenuToggle}>
          ☰
        </MobileMenuIcon>
        <Logo logoColor={logoColor}>LOGO</Logo>
        <Menu>
          {['Product', 'Solutions', 'Your Success', 'Partners', 'Resources'].map((item, index) => (
            <MenuItem
              key={index}
              href="#"
              isHovered={hoveredIndex === index && isModalOpen}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              color={navLinkColor} // Dynamically apply color prop
            >
              {item}
            </MenuItem>
          ))}
        </Menu>
        <Buttons>
          <TrialButton id='trialButton' scrolled={scrolled}>Start Free Trial</TrialButton>
          <DemoButton>Request a Demo</DemoButton>
        </Buttons>
      </NavbarContainer>


      {isMobileMenuOpen && (
        <MobileMenuModal>
          <CloseButton onClick={handleMobileMenuClose}>×</CloseButton> <br />
          {['Product', 'Solutions', 'Your Success', 'Partners', 'Resources'].map((item, index) => (
            <DropdownContainer key={index} isOpen={openDropdownIndex === index}>
              <DropdownButton onClick={() => handleDropdownToggle(index)}>
                {item}
                <ArrowIcon
                  src={openDropdownIndex === index ? UpArrow : DownArrow}
                  alt="Dropdown arrow"
                  isUp={openDropdownIndex === index}
                />
              </DropdownButton>
              <DropdownContent isOpen={selectedDropdownIndex === index}>
                <NestedDropdownButton onClick={() => handleNestedDropdownToggle(index, 1)}>
                  Overview
                  <ArrowIcon
                    src={nestedDropdownIndexes[index] === 1 ? UpArrow : DownArrow}
                    alt="Dropdown arrow"
                    isUp={nestedDropdownIndexes[index] === 1}
                  />
                </NestedDropdownButton>
                <NestedDropdownContent isOpen={nestedDropdownIndexes[index] === 1}>
                  <p>Akeneo Product Cloud</p>
                  <HorizontalLine />
                </NestedDropdownContent>

                <NestedDropdownButton onClick={() => handleNestedDropdownToggle(index, 2)}>
                  Akeneo Studios
                  <ArrowIcon
                    src={nestedDropdownIndexes[index] === 2 ? UpArrow : DownArrow}
                    alt="Dropdown arrow"
                    isUp={nestedDropdownIndexes[index] === 2}
                  />
                </NestedDropdownButton>
                <NestedDropdownContent isOpen={nestedDropdownIndexes[index] === 2}>
                  <p>PIM Enterprise Edition</p>
                  <HorizontalLine />
                  <p>PIM Growth Edition</p>
                  <HorizontalLine />
                  <p>PIM Community Edition</p>
                  <HorizontalLine />
                  <p>Compare Editions</p>
                  <HorizontalLine />
                </NestedDropdownContent>

                <NestedDropdownButton onClick={() => handleNestedDropdownToggle(index, 3)}>
                  Akeneo App Store
                  <ArrowIcon
                    src={nestedDropdownIndexes[index] === 3 ? UpArrow : DownArrow}
                    alt="Dropdown arrow"
                    isUp={nestedDropdownIndexes[index] === 3}
                  />
                </NestedDropdownButton>
                <NestedDropdownContent isOpen={nestedDropdownIndexes[index] === 3}>
                  <p>Supplier Data Manager</p>
                  <HorizontalLine />
                  <p>Activation</p>
                  <HorizontalLine />
                  <p>Shared Catalogues</p>
                  <HorizontalLine />
                  <p>Integrations</p>
                  <HorizontalLine />
                </NestedDropdownContent>
              </DropdownContent>
            </DropdownContainer>
          ))}
          <SmallButton1>Start Free Trial</SmallButton1>
          <SmallButton2>Request a Demo</SmallButton2>
        </MobileMenuModal>
      )}

      {/* <SolutionModal
        arrowPosition={hoveredIndex !== null ? hoveredIndex * 60 + 30 : null}
        isOpen={isModalOpen}
        ref={modalRef}
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
        modalTop={modalTop}
      /> */}

      {activeComponent === 'Product' && <ModalComponent
        arrowPosition={hoveredIndex !== null ? hoveredIndex * 60 + 30 : null}
        isOpen={isModalOpen}
        ref={modalRef}
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
        modalTop={modalTop}
      />}

      {activeComponent === 'Solution' && <ProductModal
        arrowPosition={hoveredIndex !== null ? hoveredIndex * 60 + 30 : null}
        isOpen={isModalOpen}
        ref={modalRef}
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
        modalTop={modalTop}
      />}
      {activeComponent === 'Resources' && <SolutionModal
        arrowPosition={hoveredIndex !== null ? hoveredIndex * 60 + 30 : null}
        isOpen={isModalOpen}
        ref={modalRef}
        onMouseEnter={() => setIsModalOpen(true)}
        onMouseLeave={() => setIsModalOpen(false)}
        modalTop={modalTop}
      />}
    </>
  );
};

export default Navbar;
