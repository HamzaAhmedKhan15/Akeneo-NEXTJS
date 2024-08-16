// components/layout/Loader.tsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of viewport */
  background-color: white;
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #c04ee7; /* Purple */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoaderComponent: React.FC = () => (
  <LoaderWrapper>
    <Loader />
  </LoaderWrapper>
);

export default LoaderComponent;
